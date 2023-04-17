import React, { useState } from "react";
import { useRouter } from "next/router";
import Usespotify from "@/hooks/usespotify";
import { useEffect } from "react";
import mongoose from "mongoose";
import Spotifyuser from "@/model/Spotifyuser";
import { useSession } from "next-auth/react";
import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";
import { BiEdit ,BiExport} from "react-icons/bi";
import Promise from 'react-promise';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from "js-cookie";
import { Cookie } from "express-session";

const Tags = ({ user, tagname, pid, tracksname }) => {
  const songs=convertToSpotifyURIs(tracksname)
  console.log(songs,"spmgs")
  
  let trackvalue=tracksname
  const [tracks, setTracks] = useState(trackvalue)
  console.log("tracks",tracks)
  const { data: session, status } = useSession();
  const [data, setData] = useState([]);
  const [playlistname, setPlaylistname] = useState(
    tagname.charAt(0).toUpperCase() + tagname.slice(1)
  );
  const [description, setDescription] = useState(`Listen Awesome Songs of ${playlistname}. This Playlist is created using PlaylistPilot music organizer `)
  const [edit, setEdit] = useState(true);
  const [reloadkey, setReloadkey] = useState(1)
  const [descedit, setdescedit] = useState(true)
  const [getId, setGetId] = useState()
  const [atoken, setAtoken] = useState('')
  const [functioncall, setFunctioncall] = useState(1)
  // console.log(tagname,"tagname")
  // console.log("user",user)
  const Router = useRouter();
  const tags = Router.query.tag;
  // console.log(tags)
  const tag = tags.split("$")[1];
  const playlistid = tags.split("$")[0];
  const spotifyApi = Usespotify();
 
  // console.log(tagname, "super", pid, tracks);
  function convertToSpotifyURIs(array) {
    const uris = array.map((item) => `spotify:track:${item}`);
    return { uris };
  }
  const getTracksFunction = async () => {
    if (spotifyApi?.getAccessToken()) {
      setAtoken(spotifyApi.getAccessToken())
      let a = await spotifyApi.getTracks(tracks);
      setData(a.body.tracks);
     
        
      
      
    }

    
  };
  const toggle = () => {
    setEdit(!edit);
  };
  const toggledesc = () => {
    setdescedit(!descedit);
  };

  const remove = (trackid) => {
    setTracks(tracks.filter(track => track !== trackid))
    // console.log(tracks,"imder")
    setReloadkey(Math.random())
  };

  console.log(atoken,"atoken")
  const createPlaylist= async(  ) => {
    

    console.log("createplaylist")
    console.log(spotifyApi.getAccessToken(),"outside")
   try {
    console.log("trying")
    if(spotifyApi?.getAccessToken()){
      console.log(spotifyApi?.getAccessToken(),"stoken")
      let newPlaylist = await toast.promise(
        spotifyApi.createPlaylist(playlistname, { description: description }),
        {
          pending: 'Creating playlist...',
          success: 'Playlist added successfully!',
          error: 'Failed to add playlist.',
        }
      );
       console.log(newPlaylist,"new play")
  
      // Wrap addTracksToPlaylist API call with toast.promise
      let response = await toast.promise(
        fetch(`https://api.spotify.com/v1/playlists/${newPlaylist.body.id}/tracks`,{
          method:'POST',
          headers:{
            "Authorization":`Bearer ${Cookies.get("atoken")}`,
            "Content-Type":"application/json"
          },
          body:JSON.stringify(songs)
        })
        
        ,
        {
          pending: 'Adding tracks...',
          success: 'Tracks added successfully!',
          error: 'Failed to add tracks.',
        }
      )
      let b=await response.json()
      console.log(b,"tracks added")
     }
     
   } catch (error) {
    console.log("error=>",error)
   }

  // let a = await fetch(`https://api.spotify.com/v1/users/${Cookies.get('spotifyid')}/playlists`,{
  //   method:'POST',
  //   headers:{
  //     "Authorization":`Bearer ${atoken}`,
  //     "Content-Type":"application/json"
  //   },
  //   body:JSON.stringify({
  //     "name": playlistname,
  //     "description": description,
  //     // "public": false
  // })
  // })
  // let response=await a.json()
  // console.log(response,"response")
  }
  

  useEffect(() => {
    console.log("useffect is done");
    getTracksFunction();

    console.log("lastuseefct");
  }, [tracks,reloadkey]);
  // console.log(data, "functional");


  useEffect(() => {
    if(spotifyApi.getAccessToken()){
      createPlaylist()
  
    }
  }, [functioncall])
  
  return (
    <div className=" m-4 p-4 text-white min-h-screen">
<ToastContainer
position="top-right"
autoClose={1500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
{/* Same as */}
<ToastContainer />
      <div className="container mx-auto pt-10">
      <div className="flex flex-col mx-4">
      {edit ? (
          <div className="flex justify-between">
            <div className="flex"><h1 className="text-4xl font-bold mb-10">{playlistname}</h1>
            <BiEdit  className="cursor-pointer" onClick={toggle}/></div>
            <button onClick={()=>{setFunctioncall(Math.random())}} className= "mb-10  items-center hidden text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-800 rounded-full text-lg"><BiExport  className="mr-2"/>Export Playlist</button>
          </div>
        ) : (
          <form onSubmit={toggle} className="flex">
            <input 
            onDoubleClick={toggle}
              onChange={(e) => {
                e.target.value;
                setPlaylistname(e.target.value);
              }}
              value={playlistname}
              type="text"
              id="name"
              name="name"
              className=" border  focus:border-violet-700 bg-inherit rounded font-bold outline-none mb-10 text-white py-1 px-3 text-4xl transition-colors duration-200 ease-in-out"
            />
          </form>
        )}
        
        {descedit ? (
          <div className="flex">
            <h1 className="text-xl font-semibold mb-10">{description}</h1>
            <BiEdit  className="cursor-pointer" onClick={toggledesc}/>
          </div>
        ) : (
          <form onSubmit={toggledesc} className="flex">
            <textarea 
            onDoubleClick={toggledesc}
              onChange={(e) => {
                e.target.value;
                setDescription(e.target.value);
              }}
              value={description}
              type="text"
              id="desc"
              name="desc"
              className=" border w-full  focus:border-violet-700 bg-inherit rounded font-semibold outline-none mb-10 text-white py-1 px-3 text-xl transition-colors duration-200 ease-in-out"
            />
          </form>
        )}
      </div>
        <div  className="grid grid-cols-4 gap-4">
          {tracks.length && data.map((track) => (
            <div key={track.id}><div key={track.id} className="rounded-lg overflow-hidden">
            <img
              src={track.album.images[0]?.url}
              alt={track.album.name}
              className="h-80 w-full object-cover rounded-lg"
            />
            <div className="px-4 py-2">
              <h3 className="text-lg font-medium">{track.name}</h3>
              <p className="text-gray-400">
                {track.artists.map((artist) => artist.name).join(", ")}
              </p>
            </div>
            <div className="hidden justify-end mr-10">
              {/* <AiFillPlusCircle className="text-5xl"/> */}
              <AiFillMinusCircle onClick={()=>{remove(track.id)}} className="text-5xl cursor-pointer hover:text-red-600" />
            </div>
          </div></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tags;

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  const tagnoun = context.query.tag;

  let spotifyid = context.req.cookies["spotifyid"];
  // console.log(tag,playlistid,"here")
  // console.log(spotifyid, "sid");
  let user = await Spotifyuser.find({ id: spotifyid });
  let data = user[0].tags;
  // console.log("users",user)
  console.log(tagnoun, "here");
  const tagname = tagnoun.split("$")[1];
  const playlistid = tagnoun.split("$")[0];
  const searchString = tagname;
  let tracks = [];

  for (const key in data) {
    data[key].map((item) => {
      if (item[1] === searchString) {
        tracks.push(item[0]);
      }
    });
  }

  function filterUnique(arr) {
    // create a new array to store the unique arrays
    let uniqueArr = [];

    // loop through the original array
    for (let i = 0; i < arr.length; i++) {
      // if the array is not already in the unique array, add it
      if (!arrayInArray(uniqueArr, arr[i])) {
        uniqueArr.push(arr[i]);
      }
    }

    return uniqueArr;
  }

  // helper function to check if an array is already in another array
  function arrayInArray(arr, elem) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length !== elem.length) continue;
      let match = true;
      for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] !== elem[j]) {
          match = false;
          break;
        }
      }
      if (match) return true;
    }
    return false;
  }
  tracks = filterUnique(tracks);
  console.log(tracks, "tracks");
  // console.log("super",tag,playlistid)

  return {
    props: {
      user: JSON.parse(JSON.stringify(user)),
      tagname: tagname,
      pid: playlistid,
      tracksname: tracks,
    },
  };
}
