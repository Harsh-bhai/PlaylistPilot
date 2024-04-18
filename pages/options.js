import React from "react";
import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Usespotify from "@/hooks/usespotify";
import Link from "next/link";
import Cookies from "js-cookie";
import { FaMusic } from 'react-icons/fa';
const Options = () => {
  const spotifyApi = Usespotify();
  const { data: session, status } = useSession();
  const [playlists, setPlaylists] = useState([]);

  // setting spoitify id and access token in cookies
  useEffect(() => {
    if ( spotifyApi.getAccessToken()){
      spotifyApi.getUserPlaylists().then((data)=>{
        setPlaylists(data.body.items)
        Cookies.set("spotifyid",spotifyApi.getClientId())
        Cookies.set("atoken",spotifyApi.getAccessToken())
        Cookies.set("previouslyLoggedIn",true)

      })
    }
  }, [session,spotifyApi])

  useEffect(() => {
    storeDetails();
  }, [])
  
  // adding user details in mongodb
  const storeDetails = async () => {
    if (spotifyApi?.getAccessToken()) {
      try {
        let a = await spotifyApi.getMe();
        let c = await spotifyApi.getClientId();
        let data = {
          userinfo: a.body,
          id: c,
        };

        let store = await fetch(
          `${process.env.NEXT_PUBLIC_BASEURL}/api/addspotifyuser`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
      } catch (error) {
        console.log("Error:", error);
      }
    }
  };
  

  return (
    <div className="min-h-screen text-white flex flex-col space-y-4 ">
      <div className="text-center space-y-4 my-10"><h1 className="text-5xl font-bold">Options</h1>
      <h2>Create, Modify your Playlist here ...</h2></div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex justify-evenly  flex-wrap -m-4">
            <div className="  w-1/4 hover:scale-110 transition-transform hover:delay-75 ">
              <Link href={`/getplaylist`} className="flex space-y-4 flex-col justify-center items-center text-white border-2 border-white rounded-lg relative h-48  overflow-hidden">
              <FaMusic className="text-5xl"/> <span className="text-xl font-semibold">Add Tags to Songs</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Options;
