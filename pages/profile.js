import Usespotify from "@/hooks/usespotify";
import Cookies from "js-cookie";
import Link from "next/link";
import React from "react";
import { useEffect,useState } from "react";
import { useSession } from "next-auth/react";

const Profile = ({  }) => {
  const [user, setuser] = useState()
  const spotifyApi=Usespotify()
  const { data: session, status } = useSession();

  // console.log(user, "sjdflkfjg");
  // console.log(Cookies.get("token"));
  useEffect(() => {
    if(spotifyApi.getAccessToken()){
      spotifyApi.getMe().then((e)=>setuser(e.body))
    }
  }, [session,user])
  console.log(user,"user")
  
  return (
   <div className=""> <div className=" flex place-content-center place-items-center w-screen h-screen bg-gray-800 overflow-hidden">
   <div className="flex px-5 py-10 border-4 m-2 rounded-2xl ">
     <div className="info text-white justify-center items-center sm:flex sm:space-x-40 m-auto">
       <div className="pfp m-10 ">
         <img
           className="rounded-full h-60 w-60 sm:h-96 sm:w-96 object-cover object-center border-4 border-white"
           src={`${user?.images[0]?.url}`}
           alt=""
         />
       </div>
       <div className="about flex flex-col items-center space-y-3 tracking-wider sm:space-y-5">
         <p className="text-4xl sm:text-5xl font-semibold">
           {user?.display_name}
         </p>
         <div className="flex">
           <p className="text-2xl">Spotify ID :</p>{" "}
           <p className="text-green-400 text-2xl">{user?.id}</p>
         </div>
         <div className="flex">
           <p className="text-2xl">Email ID :</p>{" "}
           <p className="text-green-400 text-2xl">{user?.email}</p>
         </div>
         <div className="flex">
           <p className="text-2xl">Country :</p>{" "}
           <p className="text-green-400 text-2xl">{user?.country}</p>
         </div>
         <div className="flex">
           <p className="text-2xl">Followers :</p>{" "}
           <p className="text-green-400 text-2xl">{user?.followers?.total}</p>
         </div>
         <div className="flex flex-wrap justify-center">
           <p className="text-2xl  ">Spotify profile URL  : </p>{" "}
           <a target={'_blank'} href={user?.external_urls?.spotify} className="text-green-400 text-2xl">
             {user?.external_urls?.spotify}
           </a>
         </div>
       </div>
     </div>
   </div>
 </div></div>
  );
};

export default Profile;


