// src/components/SpotifyDisplay.jsx
import { useState, useEffect } from 'react';

function SpotifyDisplay() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch data from your API endpoint
        fetch('/api/spotify') // Relative URL within the same domain
            .then(response => {
                if (!response.ok) {
                    // Try to get error details from API response body
                    return response.json().then(errData => {
                        throw new Error(`HTTP error! status: ${response.status} - ${errData.message || 'Unknown API Error'}`);
                    }).catch(() => {
                        // If parsing JSON fails, throw generic error
                        throw new Error(`HTTP error! status: ${response.status}`);
                    });
                }
                return response.json();
            })
            .then(jsonData => {
                setData(jsonData);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch Spotify data:", err);
                setError(err.message);
                setLoading(false);
            });
    }, []); // Empty dependency array means this runs once on mount

    // Basic styling for the preformatted text
    const preStyle = {
        backgroundColor: 'rgba(20, 20, 20, 0.8)', // Darker background, slightly transparent
        border: '1px solid #444',
        color: '#e0e0e0', // Light text color
        padding: '15px',
        overflowX: 'auto', // Handle long lines horizontally
        whiteSpace: 'pre-wrap', // Wrap long lines
        wordWrap: 'break-word', // Ensure words break correctly
        maxHeight: '400px', // Limit height and allow vertical scroll
        overflowY: 'auto',
        fontSize: '0.85rem', // Slightly smaller font size
        borderRadius: '8px',
        marginTop: '20px', // Add some space above
    };

    return (
        <div className="spotify-display-container text-white-500"> {/* Use existing text color class */}
            <h3 className="text-xl font-semibold mb-3">Live Spotify Data</h3>
            {loading && <p>Loading Spotify data...</p>}
            {error && <p style={{ color: '#ff6b6b' }}>Error loading data: {error}</p>}
            {data && (
                <>
                    <pre style={preStyle}>
                        {JSON.stringify(data, null, 2)}
                    </pre>
                    {/* Optional: Add control instructions/links here if desired */}
                    {data.controls && (
                        <div className="mt-4 text-sm">
                            <h4 className="font-semibold mb-1">Controls (Premium Required):</h4>
                            <p> - <a href={data.controls.stop_playback_url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Stop Playback</a></p>
                            <p className="mt-1"> - To play a top track, append its <code className="bg-gray-700 px-1 rounded">'uri'</code> to:</p>
                            <code className="block bg-gray-700 p-1 rounded mt-1 break-all">{data.controls.play_track_base_url}</code>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

export default SpotifyDisplay;