import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";

const Import = () => {
  const clientId = "891188afc71b416fa8c632d461fced56";
  const redirectURI = process.env.NEXT_PUBLIC_BASEURL;
  const authEndpoint = "https://accounts.spotify.com/authorize";
  const responseType = "token";

  return (
    <div className="min-h-screen">
      <p className="text-center text-white text-5xl font-bold my-10">
        Import You Playlist
      </p>
      <div className="flex justify-center items-center space-x-10 my-40">
        <Link href={`${authEndpoint}?client_id=${clientId}&response_type=${responseType}&redirect_uri=${redirectURI}`}>
            <button className=" text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-full text-lg">
              Import from Spotify
            </button>
        </Link>
        {/* <button className=" text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-full text-lg">
          Import from Gallery
        </button> */}
      </div>
    </div>
  );
};

export default Import;
