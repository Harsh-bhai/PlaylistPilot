import React, { useEffect, useState } from "react";
import Usespotify from "@/hooks/usespotify";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const PlaylistTracks = ({ song }) => {
  // console.log(song, "song");
  const spotifyApi = Usespotify();
  const { data: session, status } = useSession();
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [atoken, setAtoken] = useState();
  const [isThereTag, setIsThereTag] = useState(false)
  const [tagarray, setTagarray] = useState([])
  // const [accesstoken, setAccesstoken] = useState('')
  const router = useRouter();
  const { playlistid } = router.query;

  useEffect(() => {
    if (spotifyApi?.getAccessToken()) {
      console.log("useeffect is working")
      setAtoken(spotifyApi.getAccessToken());
      spotifyApi.getPlaylistTracks(playlistid).then((data) => {
        if (data.length !== 0) {
          setPlaylistTracks(data.body.items);
        }
      });
      console.log("before")
      CheckTags();
      console.log("after")
    }
  }, [session, spotifyApi, playlistid]);


  const CheckTags= async(  ) => {
    console.log("check is working")
    const url = `https://api.spotify.com/v1/playlists/${playlistid}`;

    // Set up authorization headers with your Spotify API access token
    let response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${atoken}`,
        "Content-Type": "application/json",
      },
    });
    let datas= await response.json();
  try {
    console.log('trying')
    let data=datas.description || []
    data = data.replaceAll("&#x27;", "'");
      data = data.replaceAll("&quot;", `"`);
      data = data.replaceAll(`"`, `'`);
      data = data.replaceAll(`'`, `"`);
      setIsThereTag(true)
        setTagarray(JSON.parse(tagarray))
        console.log(tagarray,"superman")
     
      
      
    
    console.log("data is here",data)
  } catch (error) {
    
  }

  }

  console.log( tagarray,"tagarary")
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
  
  

  console.log(atoken);
  const handleSubmit = async (track, tags) => {
    const trackId = track.track.id;
    const url = `https://api.spotify.com/v1/playlists/${playlistid}`;

    // Set up authorization headers with your Spotify API access token
    let response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${atoken}`,
        "Content-Type": "application/json",
      },
    });
    let data = await response.json();
    console.log(data,"data")
    // Find the index of the track with the matching track ID
    const trackIndex = data.tracks.items.findIndex(
      (item) => item.track.id === trackId
    );

    // Add or update the tags for the track, if it exists
    if (trackIndex !== -1) {
      let prevTags = data.description || '[]';
      prevTags = prevTags.replaceAll("&#x27;", "'");
      prevTags = prevTags.replaceAll("&quot;", `"`);
      prevTags = prevTags.replaceAll(`"`, `'`);
      prevTags = prevTags.replaceAll(`'`, `"`);
      
      console.log(JSON.parse(prevTags), "prevtags");

      console.log("trackindex found");
      try {
        prevTags=JSON.parse(prevTags)
        prevTags.push([trackId,tags])
        prevTags=filterUnique(prevTags)
        console.log("trying",prevTags);
        let final = await fetch(url, {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${atoken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ description:JSON.stringify(prevTags)  }),
        });
        let a = await final.json();
        console.log("huge success", a);
      } catch (error) {
        console.log("not done error =>", error);
      }
    }
  };

  console.log(playlistTracks);
  return (
    <div className="text-white min-h-screen mx-4">
      <div className="container mx-auto pt-10">
        <h1 className="text-4xl font-bold mb-10">Playlist Tracks</h1>
        <div className="">
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
                  {
                  isThereTag && tagarray.map((item)=>{
                    console.log(item,"item")
                    if(item[0]==track.track.id){
                      return(<span className="px-4 text-center pb-1 rounded-full  mx-2 bg-gray-400">{`${item[1]}`}</span>)

                    }
                  })}
                </div>
              </div>
              <div className="flex">
               
                <div className="relative mb-10 flex space-x-3">
                  {/* <label for="tags" className="leading-7 text-sm text-gray-600">tags</label> */}
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
                    className="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg  sm:mt-0"
                    onClick={(e) => {
                      handleSubmit(track, e.target.previousSibling.value);
                      console.log(e.target.previousSibling.value, "here");
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














