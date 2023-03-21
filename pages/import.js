import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { SlSocialSpotify } from 'react-icons/sl'


const Import = ({ Logout, reloadkey }) => {
  const [token, setToken] = useState();
  const Router = useRouter();

  useEffect(() => {
    console.log("hi i am usestate");
    const hash = window.location.hash;
    let token = Cookies.get("token");
    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];
      window.location.hash = "";
      Cookies.set("token", token, { expires: 30 });
      setToken(token);
    }
    else if (token){
      Router.push(`/options`)
    }
    console.log(!token)
    console.log()
  }, []);

  const redirectURI = `${process.env.NEXT_PUBLIC_BASEURL}/import`;
  const authEndpoint = "https://accounts.spotify.com/authorize";
  const responseType = "token";
  const scope = "user-read-email user-library-read user-library-modify user-read-private user-read-playback-state user-modify-playback-state playlist-read-private playlist-modify-public playlist-modify-private user-follow-read user-follow-modify user-top-read user-read-recently-played streaming app-remote-control user-read-currently-playing user-read-playback-position ugc-image-upload"

  return (
    <div className="min-h-screen">
      <p className="text-center text-white text-5xl font-bold mt-36">
        Import You Playlist
      </p>
      <div className="flex justify-center items-center space-x-10 my-28">
        {!token && (
          <Link
            href={`${authEndpoint}?client_id=${process.env.NEXT_PUBLIC_clientId}&response_type=${responseType}&redirect_uri=${redirectURI}&scope=${scope}`}
          >
            <button className="flex items-center text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-full text-lg">
            <SlSocialSpotify className="mr-2 text-3xl"/> Import from Spotify
            </button>
          </Link>
        ) }
      </div>
    </div>
  );
};

export default Import;
