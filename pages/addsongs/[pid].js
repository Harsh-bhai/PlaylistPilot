import { useRouter } from 'next/router'
import React,{useEffect, useState} from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import Usespotify from '@/hooks/usespotify';
import { useSession } from 'next-auth/react';

const Addsongs = () => {
    const spotifyApi=Usespotify()
    const [searchQuery, setSearchQuery] = useState('')
    const [searchitem, setSearchitem] = useState()
    const [reloadkey, setReloadkey] = useState(1)
    const [detail, setDetail] = useState([])
    const [searched, setsearched] = useState(false)
    const { data: session, status } = useSession();


    const handleSubmit =async (e) => {
      // e.preventDefault()
      console.log("running")
    //   ['album', 'artist', 'playlist', 'track', 'show', 'episode']
     try {
      console.log("trying")
      if(spotifyApi?.getAccessToken()){
        console.log("inside")
        let a = await spotifyApi.searchTracks(searchQuery,{limit:10,offset:0})
        console.log(searchQuery,"query")
        setSearchitem(a.body.tracks.items)
        setReloadkey(Math.random())
        console.log(a.body.tracks.items,"here")
        a.body.tracks?setsearched(true):setsearched(false)
      }
     } catch (error) {
      console.log(error)
     }
    }
    const SongArray=[]
    useEffect(() => {
    handleSubmit()
    }, [reloadkey,session])
    
    // console.log(SongArray,"songarray")
    const Router= useRouter()
    const {pid}=Router.query
    return (
        <div>
        <div className="mx-auto max-w-6xl flex flex-col items-center justify-center  py-2">
          <form onSubmit={(e)=>{e.preventDefault();setReloadkey(Math.random())}} className="w-full flex justify-end">
            <div className=" w-full flex space-x-4 justify-center items-center">
              <input
                id="searchQuery"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tracks, artists, album"
                className="appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none rounded-full focus:shadow-outline"
              />
              <button type="button" onClick={()=>{setReloadkey(Math.random())}} className='text-white text-3xl bg-transparent border-none'><AiOutlineSearch /></button>
            </div>
          </form>
        </div>
      <div className=''>
      <div className=" min-h-screen text-white p-4 m-4">
        <div className="flex justify-between"><h1 className="text-4xl font-bold ">Search Results</h1>
        <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-800 rounded-full text-xl font-semibold">Create Playlist</button>
        </div>
      <div className="flex  mx-auto pt-10">
        <div key={reloadkey} className="w-4/5  grid grid-cols-4 gap-4">
  {searchitem && searchitem?.map((item) => (
    <div key={item.id} onClick={() => setDetail([...detail, { id: item.id, name: item.name }])} className="rounded-lg overflow-hidden">
      <img src={item.album.images[0]?.url} alt={item.album.name} className="w-full object-cover " />
      <div className="px-4 py-2">
        <h3 className="text-lg font-medium">{item.name}</h3>
        <p className="text-gray-400">{item.artists.map((artist) => artist.name).join(", ")}</p>
      </div>
    </div>
  ))}
</div>
{searched && <div className='w-1/5 border-2 flex flex-col text-center border-white'>
<h1 className='text-2xl font-semibold m-4'>Playlist Items</h1>
{detail?.map((item)=>{

    console.log(item,"here",detail)
    return(
        <div className="items">
    <span className='text-xl'>{item.name}</span>
</div>
    )
})}
    </div>}

      </div>
    </div>
   
      </div>
        </div>
      );
      
}

export default Addsongs