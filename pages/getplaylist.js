import React from 'react'
import { useEffect, useState } from "react";
import Usespotify from "@/hooks/usespotify";
import { useSession } from 'next-auth/react';
import {  useRouter } from 'next/router';

const Getplaylist = () => {
    const Router=useRouter()
    const spotifyApi = Usespotify();
    const { data: session, status } = useSession();
    const [playlists, setPlaylists] = useState([]);
  
    useEffect( () => {
      if (spotifyApi?.getAccessToken()){
        spotifyApi.getUserPlaylists().then((data)=>{
          if(data.length!=0){
            setPlaylists(data.body.items)
          }
        })
      }
    
    }, [session,spotifyApi])
    console.log(playlists,"playlist")
    
  return (
    <div className="flex flex-wrap">
  {playlists.map((playlist) => (
    <div key={playlist.id} onClick={()=>{Router.push(`/playlist/${playlist.id}`)}} href={playlist.external_urls.spotify} target="_blank" rel="noopener noreferrer" className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative pb-56">
          <img src={playlist?.images[0]?.url} alt={playlist?.name} layout="fill" objectFit="cover" />
        </div>
        <div className="p-4">
          <h2 className="text-lg font-semibold">{playlist?.name}</h2>
          <p className="text-gray-500">{playlist?.description}</p>
        </div>
      </div>
    </div>
  ))}       
</div>
  )
}

export default Getplaylist
