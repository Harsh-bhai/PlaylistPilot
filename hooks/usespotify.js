import { useEffect } from "react";
import { signln, useSession } from "next-auth/react";
import SpotifyWebApi from "spotify-web-api-node";

const Usespotify = () => {
const { data: session, status } = useSession();
  const spotifyApi = new SpotifyWebApi({
    clientId: process.env.NEXT_PUBLIC_clientId,
    clientSecret: process.env.NEXT_PUBLIC_client_secret,
  });
  useEffect(() => {
    if (session) {
      if (session.error === "RefreshAcessTokenError") {
        signln();
      }
      spotifyApi.setAccessToken(session.user.accessToken);
    }
  }, [session]);

  return spotifyApi;
};

export default Usespotify;
