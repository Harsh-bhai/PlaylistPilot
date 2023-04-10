import React,{useState} from 'react'
import { useRouter } from 'next/router'
import Usespotify from '@/hooks/usespotify'
import { useEffect } from 'react'
import mongoose from 'mongoose'
import Spotifyuser from '@/model/Spotifyuser'
const Tags = ({user,tagname}) => {
  // console.log(tagname,"tagname")
  // console.log("user",user)
  const Router=useRouter()
  const {tags}=Router.query
  // console.log(tags)
  const tag=tags.split('$')[1]
  const playlistid=tags.split('$')[0]
  const spotifyApi=Usespotify()
  console.log(tags)

  useEffect(() => {
    if(spotifyApi?.getAccessToken()){
      // spotifyApi.getTracks()
    }
  }, [])
  return(
    <div>
      playlistid:
      {playlistid}
      tag:
      {tag}
    </div>
  )
  
   
}

export default Tags


export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  const {tags}=context.query
  let tagname=null
  console.log( typeof tags,"tagname")
 try {
  if (tags.includes('&')){
    tagname=tags
  }
 } catch (error) {
  console.log(error)
 }
  
  let spotifyid = context.req.cookies["spotifyid"];
  // console.log(tag,playlistid,"here")
  // console.log(spotifyid, "sid");
  let user = await Spotifyuser.find({ id: spotifyid });
  // console.log("users",user)
  console.log(tagname,"here")
  const tag=tagname.split('&')[1]
  const playlistid=tagname.split('&')[0]
  console.log("super",tag,playlistid)
  

  return {
    props: { user: JSON.parse(JSON.stringify(user)) },
  };
}