// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/

// Send authorization to Spotify
export const authEndpoint = "https://accounts.spotify.com/authorize";

// Bring back to this app after authentication from Spotify
const redirectUri = "http://hrithikbansal.com/spotify-clone/";

const clientId = "b7dd00e3617745978f6ce9e57935fa14";
// Set scope for this app
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
    "playlist-read-private",
];

export const getTokenFromUrl = () => {
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1])
        return initial;
    }, {});
}
// Build the login url
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
