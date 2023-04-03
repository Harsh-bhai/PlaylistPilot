import React from "react";
import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Usespotify from "@/hooks/usespotify";
const Createplaylist = () => {
    const spotifyApi = Usespotify();
    const { data: session, status } = useSession();
    const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
            if ( spotifyApi.getAccessToken()){
             const a= await spotifyApi.createPlaylist(name,{description})
             console.log(a,name,description,"hre")
            }
          
    } catch (err) {
      console.log(err);
    }
  };
  
    // useEffect(() => {
    //   if ( spotifyApi.getAccessToken()){
    //     spotifyApi.getUserPlaylists().then((data)=>{
    //       setPlaylists(data.body.items)
    //     })
    //   }
    
    // }, [session,spotifyApi])
  return (
    <div> <form onSubmit={handleFormSubmit}>
    <div>
      <label htmlFor="name">Playlist Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
    <div>
      <label htmlFor="description">Description:</label>
      <input
        type="text"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </div>
    <button type="submit">Create Playlist</button>
  </form></div>
  )
}

export default Createplaylist