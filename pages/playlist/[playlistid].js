import React, { useEffect, useRef, useState } from "react";
import Usespotify from "@/hooks/usespotify";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import mongoose from "mongoose";
import Spotifyuser from "@/model/Spotifyuser";
import Link from "next/link";

const PlaylistTracks = ({ user }) => {
  console.log("users", user);
  const spotifyApi = Usespotify();

  const { data: session, status } = useSession();
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [atoken, setAtoken] = useState();
  const [isThereTag, setIsThereTag] = useState(false);
  const [ifuser, setIfuser] = useState(false)

  const [reloadkey, setReloadkey] = useState(1);
  const router = useRouter();
  const { playlistid } = router.query;
  const ref = useRef();

  useEffect(() => {
    if (spotifyApi?.getAccessToken()) {
      console.log("useeffect is working",spotifyApi?.getAccessToken());
      spotifyApi.getPlaylist(playlistid).then((data) => {});
      setAtoken(spotifyApi.getAccessToken());
      spotifyApi.getPlaylistTracks(playlistid).then((data) => {
        if (data.length !== 0) {
          setPlaylistTracks(data.body.items);
        }
      });

      console.log("before");
      console.log("after");
    }
    if(user[0]){
      setIfuser(true)
    }
  }, [session]);

  useEffect(() => {
    console.log("2nduseffect")
    storeDetails();
    if(user[0] && user[0].tags && user[0].tags[playlistid]){
      setIsThereTag(true)
    }
    
  }, []);

  function removeArraysWithValue(arr, value) {
    return arr.filter(innerArr => innerArr.indexOf(value) === -1);
  }


  const remove= async( trackId ) => {
    
    console.log("tracid",trackId)
      user[0].tags[playlistid]= removeArraysWithValue(user[0].tags[playlistid],trackId)
      
      let done = await fetch(
        `${process.env.NEXT_PUBLIC_BASEURL}/api/updatespotifyuser`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([user[0]]),
        }
      );
      console.log(user[0],"tu mere")
      
      setIsThereTag(false)
  }


  const storeDetails = async () => {
    let data = user[0]
    
    console.log("storedetails is running",data);
    if (spotifyApi?.getAccessToken()) {
      console.log(spotifyApi?.getAccessToken(), "apitoken");
      try {
        let b = await spotifyApi.getPlaylist(playlistid);
          data.playlists= { [playlistid]: b.body };

        let store = await fetch(
          `${process.env.NEXT_PUBLIC_BASEURL}/api/updatespotifyuser`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify([data]),
          }
        );
        let sote = await store.json();
        console.log(sote, "sote", data);
      } catch (error) {
        console.log("Error:", error);
      }
    }
  };

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

  const reloader =()=>{
    let timeoutId = setTimeout(() => {
      setReloadkey(Math.random());
      clearTimeout(timeoutId);
    }, 100);
  }

  console.log(atoken);
  const handleSubmit = async (track, tags) => {
    const trackId = track.track.id;
    // const url = `${process.env.NEXT_PUBLIC_BASEURL}/api/getspotifyuser`;

    // Set up authorization headers with your Spotify API access token
    let data =  user[0];
    let tagarray = [];
    if (data && data?.tags) {
      let json = data.tags;

      if (playlistid in json) {
        tagarray = json[playlistid];
      }
      tagarray.push([trackId, tags]);
      tagarray = filterUnique(tagarray);
      data.tags[playlistid] = tagarray;
      console.log([data], "ifwale", "tagarray=", tagarray, "json=", json);
    }
     else {
      tagarray = [[trackId, tags]];
      tagarray = filterUnique(tagarray);
      console.log(data,"beforeelse")
      if (data){
        data.tags = { [playlistid]: tagarray };
      }
      console.log(
        data,
        "elsewale",
        "tagarray=",
        tagarray
      );
    }
    console.log("beforedone");
    let done = await fetch(
      `${process.env.NEXT_PUBLIC_BASEURL}/api/updatespotifyuser`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([data]),
      }
    );
    let don = await done.json();
    console.log(don, "don");
    

  };



  console.log(playlistTracks,"here");
  return (
    <div ref={ref} className="text-white min-h-screen mx-4 ">
      <div className="container mx-auto pt-10">
        <div className="flex justify-between"><h1 className="text-4xl mx-6 font-bold mb-10 ">Playlist Tracks</h1>
        <h1 className="text-4xl font-bold mb-10 mx-28">Add Tags</h1></div>
        <div className="m-4">
          {playlistTracks.map((track) => (
            <div
              key={track.track.id}
              className="rounded-lg overflow-hidden flex  justify-between my-4"
            >
              <div className="flex">
                <img
                  src={track.track.album.images[0]?.url}
                  alt={track.track.album.name}
                  className="h-20 "
                />
                <div className="px-4 py-2">
                  <h3 className="text-lg font-medium">{track.track.name}</h3>
                  <p className="text-gray-400">
                    {track.track.artists
                      .map((artist) => artist.name)
                      .join(", ")}
                  </p>
                  {user[0] && user[0].tags && user[0].tags[playlistid] && user[0]?.tags[playlistid].map((item) => {
                    
                    if (item[0] == track.track.id) {
                      return (
                        <Link href={`/tag/${playlistid}$${item[1] && item[1].toLowerCase()}`}><span 
                        key={reloadkey}
                        className="px-4 text-center pb-1 rounded-full mx-2 bg-gray-400"
                      >
                        {`${item[1]}`}
                      </span></Link>
                      );
                    }else{
                      return null;
                    }
                  })}
                </div>
              </div>
              <div className="flex">
                <div className="relative mb-10 flex space-x-3">
                  <button
                    className="flex-shrink-0 text-white bg-indigo-500 border-0 
                     px-4  focus:outline-none hover:bg-indigo-600 rounded sm:mt-0"
                    onClick={(e) => {
                      remove(track.track.id);
                      reloader();
                    }}
                  >
                    remove
                  </button>
                  <input
                    type="text"
                    placeholder="soothing ,gym ..."
                    id="tags"
                    name="tags"
                    className=" w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={(e) => {
                      e.target.value;
                    }}
                  />
                  <button
                    className="flex-shrink-0 text-white bg-indigo-500 border-0 
                     px-4  focus:outline-none hover:bg-indigo-600 rounded sm:mt-0"
                    onClick={(e) => {
                      handleSubmit(track, e.target.previousSibling.value);
                      reloader();
                    }}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlaylistTracks;

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let spotifyid = context.req.cookies["spotifyid"];
  console.log(spotifyid, "sid");
  let user = await Spotifyuser.find({ id: spotifyid });

  return {
    props: { user: JSON.parse(JSON.stringify(user)) },
  };
}
