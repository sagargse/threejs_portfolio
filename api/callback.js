// File: api/callback.js

import axios from 'axios'; // To make HTTP requests
import qs from 'qs';     // To format data for the request

// These should be set in your Vercel Environment Variables
const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REDIRECT_URI = process.env.SPOTIFY_REDIRECT_URI;

// This is the main function Vercel runs when Spotify redirects the user back here
export default async function handler(req, res) {
    // Extract the authorization code and potential error from the query parameters
    const code = req.query.code || null;
    const error = req.query.error || null;

    // Handle case where the user denied access or an error occurred
    if (error) {
        console.error('Callback Error from Spotify:', error);
        // Send an error response back to the browser
        res.status(400).send(`<html><body><h1>Callback Error</h1><p>${error}</p></body></html>`);
        return;
    }

    // Handle case where no code was received (shouldn't normally happen if no error)
    if (!code) {
        res.status(400).send('<html><body><h1>Error</h1><p>No authorization code received from Spotify.</p></body></html>');
        return;
    }

    // --- Exchange the authorization code for tokens ---

    // Prepare the authorization header (Basic Authentication)
    // This encodes "your_client_id:your_client_secret" in Base64
    const authHeader = 'Basic ' + Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64');

    // The URL for Spotify's token endpoint
    const tokenUrl = 'https://accounts.spotify.com/api/token';

    // The data to send in the POST request body
    const data = qs.stringify({
        grant_type: 'authorization_code', // Specify we're using the authorization code grant
        code: code,                       // The code we just received
        redirect_uri: REDIRECT_URI        // Must match the URI used in the initial /login request
    });

    try {
        // Make the POST request to Spotify to get the tokens
        const response = await axios.post(tokenUrl, data, {
            headers: {
                // Required header for this type of request
                'Content-Type': 'application/x-www-form-urlencoded',
                // The Basic Authentication header
                'Authorization': authHeader
            }
        });

        // Extract the tokens and expiry time from Spotify's response
        const { access_token, refresh_token, expires_in } = response.data;

        // --- IMPORTANT: Display the Refresh Token ---
        // This is the crucial part for the one-time setup.
        // We log it to Vercel's serverless function logs AND display it on the page.
        console.log('--- SPOTIFY AUTH SUCCESS ---');
        console.log('Access Token:', access_token);
        console.log('Expires In (seconds):', expires_in);
        console.log('Obtained Refresh Token:', refresh_token); // Check Vercel logs for this!
        console.log('-----------------------------');


        // Send an HTML response to the user's browser showing the refresh token
        // In a production app, you'd normally redirect the user elsewhere and store the token securely.
        res.status(200).send(`
            <html>
            <head><title>Spotify Auth Success</title></head>
            <body style="font-family: sans-serif; padding: 20px;">
                <h1>Authentication Successful!</h1>
                <p>Your application has been granted access.</p>
                <hr>
                <p style="color: #e53e3e; font-weight: bold; font-size: 1.1em;">ACTION REQUIRED:</p>
                <p>Copy the Refresh Token below. You need to add this as an Environment Variable named <code>SPOTIFY_REFRESH_TOKEN</code> in your Vercel project settings.</p>
                <div>
                    <p><strong>Refresh Token:</strong></p>
                    <textarea rows="5" style="width: 90%; font-family: monospace; padding: 10px; border: 1px solid #ccc; background-color: #f0f0f0;" readonly onclick="this.select();">${refresh_token}</textarea>
                </div>
                <p>After adding the refresh token to your Vercel settings, you will need to <strong>redeploy</strong> your project for the main <code>/api/spotify</code> endpoint to use it.</p>
                <p>You can then optionally remove the code that displays this token from <code>api/callback.js</code>.</p>
                <hr>
                <p><small>Access Token (short-lived): ${access_token}</small></p>
            </body>
            </html>
        `);

    } catch (err) {
        // Handle errors during the token exchange
        console.error('Error getting token from Spotify:', err.response ? err.response.data : err.message);
        res.status(500).send(`<html><body><h1>Error Getting Token</h1><p>Failed to exchange authorization code for tokens. Check Vercel function logs.</p><pre>${err.message}</pre></body></html>`);
    }
}