import { useEffect ,useState } from "react";
import { signln, useSession } from "next-auth/react";
import SpotifyWebApi from "spotify-web-api-node";
import { useRouter } from "next/router";

const Usespotify = () => {
  const router=useRouter()
const { data: session } = useSession();
  const spotifyApi = new SpotifyWebApi({
    clientId: process.env.NEXT_PUBLIC_clientId,
    clientSecret: process.env.NEXT_PUBLIC_client_secret,
  });
  useEffect(() => {
    if (session) {
      if (session.error === "RefreshAcessTokenError" ) {
        signln();
      }
      else if (session.error==="WebapiRegularError"){
        router.push('/login')
      }
      spotifyApi.setAccessToken(session.user.accessToken);
    }
  }, [session]);

  return spotifyApi;
};

export default Usespotify;
