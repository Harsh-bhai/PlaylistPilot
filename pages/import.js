import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Cookies from 'js-cookie'

const Import = ({Logout,reloadkey}) => {
  const [token, setToken] = useState()

useEffect(() => {
  console.log("hi i am usestate")
    const hash = window.location.hash
    let token=Cookies.get("token")
    if (!token && hash){
      token = hash.substring(1).split("&").find(elem=>elem.startsWith("access_token")).split('=')[1]
      window.location.hash=''
      Cookies.set("token",token,{expires:30})
    }
    setToken(token)
}, [])




  const clientId = "891188afc71b416fa8c632d461fced56";
  const redirectURI = `${process.env.NEXT_PUBLIC_BASEURL}/import`;
  const authEndpoint = "https://accounts.spotify.com/authorize";
  const responseType = "token";

  return (
    <div className="min-h-screen">
      <p className="text-center text-white text-5xl font-bold my-10">
        Import You Playlist
      </p>
      <div className="flex justify-center items-center space-x-10 my-40">
        {!token?<Link href={`${authEndpoint}?client_id=${clientId}&response_type=${responseType}&redirect_uri=${redirectURI}`}>
            <button className=" text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-full text-lg">
              Import from Spotify
            </button>
        </Link>:<button onClick={Logout} className=" text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-full text-lg">
              Logout
            </button>}

      </div>
    </div>
  );
};

export default Import;
