// File: api/login.js

import qs from 'qs'; // Use import for ES Modules (Vercel default)

// These should be set in your Vercel Environment Variables
const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const REDIRECT_URI = process.env.SPOTIFY_REDIRECT_URI;

// Define the permissions your application needs
const scopes = [
    'user-top-read',            // Read user's top artists and tracks
    'user-read-currently-playing', // Read user's currently playing track
    'user-read-playback-state',   // Read user's playback state (needed for context)
    'user-modify-playback-state'  // Control playback (play/pause)
].join(' '); // Joins the array elements into a space-separated string

// This is the main function Vercel will run when this endpoint is hit
export default function handler(req, res) {
    // Construct the Spotify Authorization URL
    const authUrl = 'https://accounts.spotify.com/authorize?' +
        qs.stringify({
            response_type: 'code',    // We want an authorization code back
            client_id: CLIENT_ID,     // Your application's Client ID
            scope: scopes,            // The permissions we're requesting
            redirect_uri: REDIRECT_URI, // Where Spotify should send the user back
            // state: 'optional_state_string' // Optional: for security, you can add a random string here
            // and verify it in the callback. We'll skip for simplicity.
        });

    // Redirect the user's browser to the Spotify login page
    // 302 is the HTTP status code for a temporary redirect
    res.redirect(302, authUrl);
}