import React from "react";
import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Usespotify from "@/hooks/usespotify";
import Link from "next/link";
import Cookies from "js-cookie";
const Options = () => {
  const spotifyApi = Usespotify();
  const { data: session, status } = useSession();
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    if ( spotifyApi.getAccessToken()){
      spotifyApi.getUserPlaylists().then((data)=>{
        setPlaylists(data.body.items)
        Cookies.set("spotifyid",spotifyApi.getClientId())

      })
    }
  
  }, [session,spotifyApi])
  useEffect(() => {
    storeDetails();
  }, [])
  
  console.log(playlists,"plalist")
  const storeDetails = async () => {
    console.log("storedetails is running");
    if (spotifyApi?.getAccessToken()) {
      console.log(spotifyApi?.getAccessToken(), "apitoken");
      try {
        // console.log("trying");
        let a = await spotifyApi.getMe();
        // console.log("a", a.body);
        // let b = await spotifyApi.getPlaylist(playlistid);
        // console.log("b", b.body);
        let c = await spotifyApi.getClientId();
        let data = {
          userinfo: a.body,
          // playlists: { [playlistid]: b.body },
          id: c,
        };
        // console.log("Data:", data);

        let store = await fetch(
          `${process.env.NEXT_PUBLIC_BASEURL}/api/getspotifyuser`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
        let sote = await store.json();
        console.log(sote, "sote", data);
      } catch (error) {
        console.log("Error:", error);
      }
    }
  };
  

  return (
    <div className="min-h-screen text-white flex flex-col space-y-4 items-center">
      <h1 className="text-5xl font-bold">Options</h1>
      <h2>Create, Modify your Playlist here ...</h2>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link href={`/getplaylist`} className="flex justify-center items-center text-white border-2 border-white rounded-lg relative h-48  overflow-hidden">
               Get playlist here
              </Link>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link href={`/createplaylist`} className="flex justify-center items-center text-white border-2 border-white rounded-lg relative h-48  overflow-hidden">
               Create Playlist
              </Link>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link href={`/getplaylist`} className="flex justify-center items-center text-white border-2 border-white rounded-lg relative h-48  overflow-hidden">
               Get playlist here
              </Link>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link href={`/getplaylist`} className="flex justify-center items-center text-white border-2 border-white rounded-lg relative h-48  overflow-hidden">
               Get playlist here
              </Link>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link href={`/getplaylist`} className="flex justify-center items-center text-white border-2 border-white rounded-lg relative h-48  overflow-hidden">
               Get playlist here
              </Link>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link href={`/getplaylist`} className="flex justify-center items-center text-white border-2 border-white rounded-lg relative h-48  overflow-hidden">
               Get playlist here
              </Link>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link href={`/getplaylist`} className="flex justify-center items-center text-white border-2 border-white rounded-lg relative h-48  overflow-hidden">
               Get playlist here
              </Link>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link href={`/getplaylist`} className="flex justify-center items-center text-white border-2 border-white rounded-lg relative h-48  overflow-hidden">
               Get playlist here
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Options;

export async function getServerSideProps(context) {
  const token = context.req.cookies["token"];
  // console.log(token)

  let res = await fetch(
    "https://api.spotify.com/v1/search?query=Atif Aslam&type=artist",
    {
      headers: { Authorization: `Bearer ${token}` },
      // params:{q:}
    }
  );

  let data = await res.json();
  console.log(data);
  return {
    props: { data },
  };
}
