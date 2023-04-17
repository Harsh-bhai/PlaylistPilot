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
    <div>
      <h1 className='text-white text-5xl font-semibold m-4 mx-10 '>Your Playlists</h1>
      <h2 className='text-gray-300 text-xl  m-4 mx-10 '>Choose a playlist </h2>
      <div className="flex flex-wrap m-4 ">
     
    {playlists.map((playlist) => (
      <div key={playlist.id} onClick={()=>{Router.push(`/playlist/${playlist.id}`)}} href={playlist.external_urls.spotify} target="_blank" rel="noopener noreferrer" className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 hover:scale-110 transition-transform delay-75 cursor-pointer shadow-lg">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="">
            <img src={playlist?.images[0]?.url?playlist?.images[0]?.url:'/altimg.jpg'} layout="fill" className='object-cover object-center' />
          </div>
          <div className="p-4 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-300">
            <h2 className="text-lg font-semibold">{playlist?.name}</h2>
            {/* <p className="text-gray-500">{playlist?.description}</p> */}
          </div>
        </div>
      </div>
    ))}       
  </div></div>
  )
}

export default Getplaylist
