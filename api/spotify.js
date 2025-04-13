// File: api/spotify.js

import axios from 'axios';
import qs from 'qs';

// --- Spotify API Configuration ---
const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;

// Base64 encode Client ID and Client Secret for Basic Auth
const basicAuth = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64');

// Spotify API endpoints
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';
const TOP_TRACKS_ENDPOINT = 'https://api.spotify.com/v1/me/top/tracks?limit=10&time_range=short_term'; // Or medium_term / long_term
const PAUSE_PLAYBACK_ENDPOINT = 'https://api.spotify.com/v1/me/player/pause';
const START_PLAYBACK_ENDPOINT = 'https://api.spotify.com/v1/me/player/play';

// --- Helper Function to Get Access Token ---
/**
 * Uses the refresh token to get a new access token from Spotify.
 * @returns {Promise<string>} The access token.
 * @throws {Error} If fetching the access token fails.
 */
const getAccessToken = async () => {
    try {
        const response = await axios.post(
            TOKEN_ENDPOINT,
            qs.stringify({
                grant_type: 'refresh_token',
                refresh_token: REFRESH_TOKEN,
            }),
            {
                headers: {
                    'Authorization': `Basic ${basicAuth}`,
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            }
        );
        return response.data.access_token;
    } catch (error) {
        console.error('Error getting access token:', error.response ? error.response.data : error.message);
        // Rethrow the error to be caught by the main handler
        throw new Error('Failed to get access token from Spotify.');
    }
};

// --- Helper Function to Format Track Data ---
const formatTrack = (item) => {
    if (!item || !item.name) return null; // Handle cases where track info might be missing
    return {
        name: item.name,
        artist: item.artists.map(artist => artist.name).join(', '),
        album: item.album.name,
        album_art_url: item.album.images?.[0]?.url, // Get the first (usually largest) album art
        spotify_url: item.external_urls?.spotify,
        uri: item.uri, // Important for playback control
    };
};


// --- Main Vercel Serverless Function Handler ---
export default async function handler(req, res) {
    // Set CORS headers to allow requests from your frontend domain
    // Replace 'https://buildwithsagar.vercel.app' with your actual frontend URL if different
    // Or use '*' for testing, but be more specific in production
    res.setHeader('Access-Control-Allow-Origin', 'https://buildwithsagar.vercel.app');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // Only GET needed for this endpoint design
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle OPTIONS request for CORS preflight
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // Ensure it's a GET request otherwise
    if (req.method !== 'GET') {
        res.setHeader('Allow', ['GET']);
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        // 1. Get a fresh access token for this request
        const accessToken = await getAccessToken();

        // Prepare headers for Spotify API calls
        const spotifyApiHeaders = {
            'Authorization': `Bearer ${accessToken}`
        };

        // 2. Check for Actions (Pause/Play)
        const action = req.query.action;
        const trackUri = req.query.track_uri; // Only relevant if action=play

        if (action === 'stop') {
            try {
                await axios.put(PAUSE_PLAYBACK_ENDPOINT, null, { headers: spotifyApiHeaders });
                return res.status(200).json({ message: 'Playback stopped successfully.' });
            } catch (error) {
                console.error('Error stopping playback:', error.response ? error.response.data : error.message);
                // Check if the error is because no active device was found
                if (error.response && error.response.status === 404 && error.response.data?.error?.reason === 'NO_ACTIVE_DEVICE') {
                    return res.status(404).json({ message: 'No active Spotify device found to stop.' });
                }
                // Check if the error is because the user is not playing anything
                if (error.response && error.response.status === 403 && error.response.data?.error?.reason === 'PLAYER_COMMAND_FAILED') {
                    // Spotify might return this if already paused, treat as success or inform user
                    return res.status(200).json({ message: 'Playback is likely already stopped or command failed.' });
                }
                return res.status(error.response?.status || 500).json({ message: 'Failed to stop playback.', details: error.response?.data?.error || error.message });
            }
        }

        if (action === 'play' && trackUri) {
            try {
                await axios.put(START_PLAYBACK_ENDPOINT,
                    { uris: [trackUri] }, // Play the specific track URI
                    { headers: spotifyApiHeaders }
                );
                return res.status(200).json({ message: `Attempting to play track: ${trackUri}` });
            } catch (error) {
                console.error('Error starting playback:', error.response ? error.response.data : error.message);
                if (error.response && error.response.status === 404 && error.response.data?.error?.reason === 'NO_ACTIVE_DEVICE') {
                    return res.status(404).json({ message: 'No active Spotify device found to play on. Start playing on a device first!' });
                }
                if (error.response && error.response.status === 403 && error.response.data?.error?.reason === 'PREMIUM_REQUIRED') {
                    return res.status(403).json({ message: 'Spotify Premium is required to control playback remotely.' });
                }
                return res.status(error.response?.status || 500).json({ message: 'Failed to start playback.', details: error.response?.data?.error || error.message });
            }
        }

        // 3. Default Action: Get Now Playing and Top Tracks
        // We run these requests in parallel for speed
        const [nowPlayingResponse, topTracksResponse] = await Promise.allSettled([
            axios.get(NOW_PLAYING_ENDPOINT, { headers: spotifyApiHeaders }),
            axios.get(TOP_TRACKS_ENDPOINT, { headers: spotifyApiHeaders })
        ]);

        // Process Now Playing data
        let nowPlayingData = null;
        if (nowPlayingResponse.status === 'fulfilled' && nowPlayingResponse.value.status === 200 && nowPlayingResponse.value.data && nowPlayingResponse.value.data.item) {
            // Check if currently playing a track (vs. podcast, etc.)
            if (nowPlayingResponse.value.data.currently_playing_type === 'track') {
                nowPlayingData = {
                    is_playing: nowPlayingResponse.value.data.is_playing,
                    track: formatTrack(nowPlayingResponse.value.data.item),
                    progress_ms: nowPlayingResponse.value.data.progress_ms,
                    duration_ms: nowPlayingResponse.value.data.item.duration_ms
                };
            } else {
                nowPlayingData = { // Indicate something is playing, but not a track we handle
                    is_playing: nowPlayingResponse.value.data.is_playing,
                    type: nowPlayingResponse.value.data.currently_playing_type,
                    message: `Currently playing ${nowPlayingResponse.value.data.currently_playing_type}, not a track.`
                }
            }
        } else if (nowPlayingResponse.status === 'fulfilled' && nowPlayingResponse.value.status === 204) {
            // 204 No Content means nothing is playing
            nowPlayingData = { is_playing: false, message: "Nothing is currently playing." };
        }
        else if (nowPlayingResponse.status === 'rejected') {
            console.error("Error fetching Now Playing:", nowPlayingResponse.reason.response ? nowPlayingResponse.reason.response.data : nowPlayingResponse.reason.message);
            // Don't fail the whole request, just indicate now_playing couldn't be fetched
            nowPlayingData = { error: "Could not fetch currently playing status." }
        }


        // Process Top Tracks data
        let topTracksData = [];
        if (topTracksResponse.status === 'fulfilled' && topTracksResponse.value.status === 200) {
            topTracksData = topTracksResponse.value.data.items.map(formatTrack).filter(track => track !== null); // Format and remove nulls
        } else if (topTracksResponse.status === 'rejected') {
            console.error("Error fetching Top Tracks:", topTracksResponse.reason.response ? topTracksResponse.reason.response.data : topTracksResponse.reason.message);
            // Indicate top_tracks couldn't be fetched
            topTracksData = { error: "Could not fetch top tracks." }
        }


        // 4. Construct the final JSON response
        const responseJson = {
            now_playing: nowPlayingData,
            top_tracks: topTracksData,
            controls: {
                stop_playback_url: `${req.headers['x-forwarded-proto'] || 'http'}://${req.headers.host}/api/spotify?action=stop`,
                // Provide a base URL - the client needs to append the track URI
                play_track_base_url: `${req.headers['x-forwarded-proto'] || 'http'}://${req.headers.host}/api/spotify?action=play&track_uri=`
            }
        };

        // Send the successful response
        res.setHeader('Content-Type', 'application/json');
        return res.status(200).json(responseJson);

    } catch (error) {
        // Catch errors from getAccessToken or other unexpected issues
        console.error('Unhandled error in /api/spotify handler:', error);
        // Avoid leaking sensitive details in production
        return res.status(500).json({ message: 'An internal server error occurred.', error: error.message });
    }
}