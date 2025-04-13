import qs from 'qs';

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const REDIRECT_URI = process.env.SPOTIFY_REDIRECT_URI;

//Permissions your application needs
const scopes = [
    'user-top-read',
    'user-read-currently-playing',
    'user-read-playback-state',
    'user-modify-playback-state'
].join(' ');

// This is the main function Vercel will run when this endpoint is hit
export default function handler(req, res) {
    const authUrl = 'https://accounts.spotify.com/authorize?' +
        qs.stringify({
            response_type: 'code',
            client_id: CLIENT_ID,
            scope: scopes,
            redirect_uri: REDIRECT_URI,
        });

    // Redirect the user's browser to the Spotify login page
    res.redirect(302, authUrl);
}