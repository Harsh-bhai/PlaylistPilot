import React,{useEffect} from 'react'
import Link from 'next/link'
import { FaMusic } from 'react-icons/fa';
import { AiFillFolderAdd } from 'react-icons/ai';
import { SiYoutubemusic } from 'react-icons/si';
import Usespotify from '@/hooks/usespotify';


const Betafeatures = () => {
  const spotifyApi=Usespotify()
  useEffect(() => {
    console.log("start")
    if (spotifyApi.getAccessToken()){
      fetchDetails()
    }
    console.log("done")
  }, [])

  const fetchDetails= async(  ) => {
    try {
      if(spotifyApi.getAccessToken()){
        // let id=await spotifyApi.getClientId
        let dat=await spotifyApi.getMe()
        let data={userinfo:dat.body,id:dat.body.id}
        let a = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/api/createuser`,{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(data)
        })
        let response=await a.json()
        console.log(response)
      }
    } catch (MongoServerError ) {
      console.log("error ",MongoServerError)
    }
  }

  return (
    <div className="min-h-screen text-white flex flex-col space-y-4 ">
    <div className="text-center space-y-4 my-10"><h1 className="text-5xl font-bold">Beta Features</h1>
    <h2>Add youtube video songs here</h2></div>
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex justify-evenly  flex-wrap -m-4">
          <div className="  w-1/4 hover:scale-110 transition-transform hover:delay-75 ">
            <Link href={`/beta`} className="flex space-y-4 flex-col justify-center items-center text-white border-2 border-white rounded-lg relative h-48  overflow-hidden">
            <FaMusic className="text-5xl"/> <span className="text-xl font-semibold">Add Youtube songs</span>
            </Link>
          </div>
          <div className=" w-1/4 hover:scale-110 transition-transform hover:delay-75">
          <Link href={`/viewplaylist`} className="flex space-y-4 flex-col justify-center items-center text-white border-2 border-white rounded-lg relative h-48  overflow-hidden">
            <AiFillFolderAdd className="text-5xl"/> <span className="text-xl font-semibold">View Playlist</span>
            </Link>
          </div>
          {/* <div className="  w-1/4 hover:scale-110 transition-transform hover:delay-75">
          <Link href={`/betafeatures`} className="flex space-y-4 flex-col justify-center items-center text-white border-2 border-white rounded-lg relative h-48  overflow-hidden">
            <SiYoutubemusic className="text-5xl"/> <span className="text-xl font-semibold">Add other song links</span>
            </Link>
          </div> */}
        
        </div>
      </div>
    </section>
  </div>
  )
}

export default Betafeatures