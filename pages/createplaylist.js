import React from "react";
import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Usespotify from "@/hooks/usespotify";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
const Createplaylist = () => {
    const spotifyApi = Usespotify();
    const { data: session, status } = useSession();
    const Router = useRouter()

  const [name, setname] = useState('')
  const [description, setdescription] = useState('')
  const [reloadkey, setReloadkey] = useState(1)
    const handleSubmit = (e) => {
      e.preventDefault()
      // Handle playlist creation logic here
    }
    useEffect(() => {
   handleFormSubmit()
    }, [reloadkey,spotifyApi])
    

  const handleFormSubmit = async () => {
    
    

    try {
      console.log(spotifyApi.getAccessToken(),"token")
            if ( Cookies.get("atoken")){
             const a= await spotifyApi.createPlaylist(name,{description})
            //  console.log(a,name,description,"hre")
             Router.push(`/addsongs/${a.body.id}`)
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
      <div className="min-h-screen">
        <div className="flex my-10 space-y-20 flex-col items-center justify-center  py-2">
        <div className=""><h1 className="text-5xl text-white font-semibold ">Create Playlist</h1>
        <p className="text-gray-200 mx-2 my-2">Create your Custom Playlist here...</p></div>
      <form onSubmit={(e)=>{e.preventDefault();setReloadkey(Math.random())}} className="max-w-md w-full">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-100 font-bold mb-2">
            Playlist Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setname(e.target.value)}
            placeholder="Enter playlist name"
            className="bg-gray-300 focus:bg-gray-100 appearance-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="description" className="block text-gray-100 font-bold mb-2">
            Playlist Description
          </label>
          <textarea
            id="description"
            value={description}
            rows={5}
            onChange={(e) => setdescription(e.target.value)}
            placeholder="Enter playlist description"
            className="bg-gray-300 focus:bg-gray-100 appearance-none focus:border-indigo-700 focus:ring-2 focus:ring-indigo-200 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button className="text-white  bg-indigo-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-800 rounded-full text-lg">Create Playlist</button>
      </form>
    </div>

    
    </div>
    )
}

export default Createplaylist