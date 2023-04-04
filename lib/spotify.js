import SpotifyWebApi from "spotify-web-api-node";

  const scopes = [
    "user-read-email",
    "user-library-read",
    "user-library-modify",
    "user-read-private",
    "user-read-playback-state",
    "user-modify-playback-state",
    "playlist-read-private",
    "playlist-modify-public",
    "playlist-modify-private",
    "user-follow-read",
    "user-follow-modify",
    "user-top-read",
    "user-read-recently-played",
    "streaming",
    "app-remote-control",
    "user-read-currently-playing",
    "user-read-playback-position",
    "ugc-image-upload",
  ].join(',');


  const params={
    scope:scopes
  }


const spotifyApi = new SpotifyWebApi({
    clientId: process.env.NEXT_PUBLIC_clientId,
    clientSecret: process.env.NEXT_PUBLIC_client_secret,

})

const queryParamString = new URLSearchParams(params)
const LOGIN_URL= `https://accounts.spotify.com/authorize?${queryParamString.toString()}`

export default spotifyApi
export { LOGIN_URL  }
