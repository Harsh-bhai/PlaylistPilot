import React from 'react'
import { useEffect, useState } from "react";
import Usespotify from "@/hooks/usespotify";
import { useSession } from 'next-auth/react';
import {  useRouter } from 'next/router';

const PlaylistTracks = ({pid}) => {
    // console.log(pid)
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
    // console.log(playlists,"playlist")
  return (
    <div></div>
  )
}

export default PlaylistTracks

export async function getServerSideProps(context) {
    let {pid}=context.query.pid
    // console.log(pid,"jere")
    return {
      props: {pid}, // will be passed to the page component as props
    }
  }