import React, { useEffect, useRef, useState } from "react";
import Modal from "react-modal";
import Usespotify from "@/hooks/usespotify";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import mongoose from "mongoose";
import Spotifyuser from "@/model/Spotifyuser";
import Cookies from "js-cookie";

const PlaylistTracks = ({ user }) => {
  console.log("users", user);
  Modal.setAppElement("#__next");
  // console.log(song, "song");
  const spotifyApi = Usespotify();

  const { data: session, status } = useSession();
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [atoken, setAtoken] = useState();
  const [isThereTag, setIsThereTag] = useState(false);
  const [tagarray, setTagarray] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fetchyes, setFetchyes] = useState(false);
  const [shouldRunEffect, setShouldRunEffect] = useState(true);

  const [reloadkey, setReloadkey] = useState(1);
  // const [accesstoken, setAccesstoken] = useState('')
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
    // retriveData()
  }, [session]);

  useEffect(() => {
    storeDetails();
    if(user[0].tags[playlistid]){
      setIsThereTag(true)
    }
  }, []);

  function removeArraysWithValue(arr, value) {
    return arr.filter(innerArr => innerArr.indexOf(value) === -1);
  }


  const remove= async( trackId ) => {
    
    console.log("tracid",trackId)
    if(isThereTag){
      user[0].tags[playlistid]= removeArraysWithValue(user[0].tags[playlistid],trackId)
      
      let done = await fetch(
        `${process.env.NEXT_PUBLIC_BASEURL}/api/updatespotifyuser`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([user]),
        }
      );
      console.log(user[0],"tu mere")
      
      setIsThereTag(false)
    }
  }

  // const handleModalToggle = () => {
  //   setIsModalOpen(!isModalOpen);
  // };

  // const retriveData = async () => {
  //   try {
  //     //  const spotifyapi=Usespotify()
  //     //  let atoken=spotifyapi.getAccessToken()
  //     console.log("check is working");
  //     const url = `https://api.spotify.com/v1/playlists/${playlistid}`;

  //     // Set up authorization headers with your Spotify API access token
  //     let response = await fetch(url, {
  //       method: "GET",
  //       headers: {
  //         Authorization: `Bearer ${atoken}`,
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     let datas = await response.json();

  //     console.log("trying");
  //     let data = datas.description || [];
  //     data = data.replaceAll("&#x27;", "'");
  //     data = data.replaceAll("&quot;", `"`);
  //     data = data.replaceAll(`"`, `'`);
  //     data = data.replaceAll(`'`, `"`);
  //     // console.log(data)
  //     setIsThereTag(true);
  //     setTagarray(JSON.parse(data));
  //     setReloadkey(Math.random())
  //     console.log(tagarray, "superman");

  //     // console.log("data is here", JSON.parse(data));
  //   } catch (error) {
  //     console.log("error :",error);
  //   }
  // };

  // const toggleblur = () => {
  //   if (ref.current.classList.contains("blur-0")) {
  //     ref.current.classList.remove("blur-0");
  //     ref.current.classList.add("blur-sm");
  //   } else if (ref.current.classList.contains("blur-sm")) {
  //     ref.current.classList.remove("blur-sm");
  //     ref.current.classList.add("blur-0");
  //   }
  // };

  const storeDetails = async () => {
    console.log("storedetails is running");
    if (spotifyApi?.getAccessToken()) {
      console.log(spotifyApi?.getAccessToken(), "apitoken");
      try {
        // console.log("trying");
        let a = await spotifyApi.getMe();
        // console.log("a", a.body);
        let b = await spotifyApi.getPlaylist(playlistid);
        // console.log("b", b.body);
        let c = await spotifyApi.getClientId();
        let data = {
          userinfo: a.body,
          playlists: { [playlistid]: b.body },
          id: c,
        };
        // console.log("Data:", data);

        let store = await fetch(
          `${process.env.NEXT_PUBLIC_BASEURL}/api/getspotifyuser`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
        let sote = await store.json();
        console.log(sote, "sote", data);
      } catch (error) {
        console.log("Error:", error);
      }
    }
  };

  // console.log(tagarray, "tagarary");
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
    const url = `${process.env.NEXT_PUBLIC_BASEURL}/api/getspotifyuser`;

    // Set up authorization headers with your Spotify API access token
    let data = user[0];
    let tagarray = [];
    if (data.tags) {
      let json = data.tags;

      if (playlistid in json) {
        tagarray = json[playlistid];
      }
      tagarray.push([trackId, tags]);
      tagarray = filterUnique(tagarray);
      data.tags[playlistid] = tagarray;
      console.log([data], "ifwale", "tagarray=", tagarray, "json=", json);
    } else {
      tagarray = [[trackId, tags]];
      tagarray = filterUnique(tagarray);
      data.tags = { [playlistid]: tagarray };
      console.log(
        typeof JSON.parse(JSON.stringify(data)),
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
    
    // Find the index of the track with the matching track ID
    // const trackIndex = data.tracks.items.findIndex(
    //   (item) => item.track.id === trackId
    // );

    // // Add or update the tags for the track, if it exists
    // if (trackIndex !== -1) {
    //   let prevTags = data.description || "[]";
    //   prevTags = prevTags.replaceAll("&#x27;", "'");
    //   prevTags = prevTags.replaceAll("&quot;", `"`);
    //   prevTags = prevTags.replaceAll(`"`, `'`);
    //   prevTags = prevTags.replaceAll(`'`, `"`);

    //   console.log(JSON.parse(prevTags), "prevtags");

    //   console.log("trackindex found");
    //   try {
    //     prevTags = JSON.parse(prevTags);
    //     prevTags.push([trackId, tags]);
    //     prevTags = filterUnique(prevTags);
    //     console.log("trying", prevTags);
    //     let final = await fetch(url, {
    //       method: "PUT",
    //       headers: {
    //         Authorization: `Bearer ${atoken}`,
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({ description: JSON.stringify(prevTags) }),
    //     });
    //     let a = await final.json();
    //     console.log("huge success", a);
    //   } catch (error) {
    //     console.log("not done error =>", error);
    //   }
    // }
  };

  // Modal example is here

  //   <Modal
  //   isOpen={isModalOpen}
  //   onRequestClose={handleModalToggle}
  //   className="w-1/2 h-1/2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
  //   overlayClassName="fixed inset-0 bg-gray-700 h-1/2 w-1/2 m-auto rounded-lg bg-opacity-50 shadow-lg"
  //   contentLabel="Example Modal"
  // >
  //   <h2 className="text-2xl font-bold mb-4 text-center text-white">
  //     Wanna add TAGS here?
  //   </h2>
  //   {/* <p className="text-gray-600">Modal Content</p> */}
  //   <div className="flex justify-center space-x-10">
  //     <button
  //       className="rounded-full mt-4 py-2 px-8 bg-blue-500 text-white  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
  //       onClick={() => {
  //         handleModalToggle();
  //         toggleblur();
  //         setFetchyes(true);
  //         storeDetails();

  //       }}
  //     >
  //       Yes
  //     </button>
  //     <button
  //       className="rounded-full mt-4 py-2 px-8 bg-blue-500 text-white  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
  //       onClick={() => {
  //         handleModalToggle();
  //         toggleblur();
  //       }}
  //     >
  //       No
  //     </button>
  //   </div>
  // </Modal>

  console.log(playlistTracks);
  return (
    <div ref={ref} className="text-white min-h-screen mx-4 ">
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
                  {isThereTag && user[0]?.tags[playlistid].map((item) => {
                    console.log(item, "item");
                    if (item[0] == track.track.id) {
                      return (
                        <span
                          key={reloadkey}
                          className="px-4 text-center pb-1 rounded-full mx-2 bg-gray-400"
                        >
                          {`${item[1]}`}
                        </span>
                      );
                    } else {
                      return null;
                    }
                  })}
                </div>
              </div>
              <div className="flex">
                <div className="relative mb-10 flex space-x-3">
                  {/* <label for="tags" className="leading-7 text-sm text-gray-600">tags</label> */}
                  <button
                    className="flex-shrink-0 text-white bg-indigo-500 border-0 
                     px-4  focus:outline-none hover:bg-indigo-600 rounded sm:mt-0"
                    onClick={(e) => {
                      remove(track.track.id);
                      setReloadkey(Math.random());
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
                      setReloadkey(Math.random());
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
  // console.log("users",user)

  return {
    props: { user: JSON.parse(JSON.stringify(user)) },
  };
}
