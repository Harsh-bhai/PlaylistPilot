import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { SlSocialSpotify } from 'react-icons/sl'


const Import = ({ Logout, reloadkey }) => {
  const [token, setToken] = useState();
  const Router = useRouter();
const [access_token, setAccess_token] = useState()
const [refresh_token, setrefreshtoken] = useState()


//   useEffect(() => {
//      console.log("hi i am usestate");
//      const hash = window.location.hash;
//      let token = Cookies.get("token");
//      if (!token && hash) {
//        token = hash
//          .substring(1)
//          .split("&")
//          .find((elem) => elem.startsWith("access_token"))
//          .split("=")[1];
//        window.location.hash = "";
//        Cookies.set("token", token, { expires: 30 });
//        setToken(token);
//      }
//      else if (token){
//        Router.push(`/options`)
//      }
//      console.log(!token)
//      console.log()
//    }, []);

  
  useEffect(() => {
     // console.log("hi i am usestate");
     const hash = window.location.href;
     let token = Cookies.get("token");
try {
     if (!token && hash) {
          token = hash.split('?')[1].substring(5);
         //  window.location.href = `${process.env.NEXT_PUBLIC_BASEURL}/import`;
          Cookies.set("token", token, { expires: 30 });
          setToken(token);
          getRefreshToken()
        }
        else if (token){
          Router.push(`/options`)
        }      
        getRefreshToken()
} catch (error) {
     console.log(error)
}

   }, []);



   


const getRefreshToken= async(  ) => {
  
     
// console.log("getrefreshtoken is here")
       let a = await fetch(`https://accounts.spotify.com/api/token?code=${Cookies.get('token')}&redirect_uri=${redirectURI}&grant_type=authorization_code`,{
          headers: {
               "Authorization": `Basic ${Buffer.from(`${process.env.NEXT_PUBLIC_clientId}:${process.env.NEXT_PUBLIC_client_secret}`).toString('base64')}`,
               "Content-Type":'application/x-www-form-urlencoded'
             },
             method:"POST"
       })
       let rtoken=await a.json().refresh_token;
     //   console.log(rtoken,"refreshtoken")
       setrefreshtoken(rtoken)

        let b = await fetch(`https://accounts.spotify.com/api/token?refresh_token=${refresh_token}&grant_type=refresh_token`,{
          headers: {
               "Authorization": `Basic ${Buffer.from(`${process.env.client_id}:${process.env.client_secret}`).toString('base64')}`,
               "Content-Type":'application/x-www-form-urlencoded'
             },
             method:"POST"
       })
       let atoken=await b.json().access_token
       setAccess_token(atoken)
       Cookies.set("access_token",access_token)
       console.log(Cookies.get('access_token'))
}


  const redirectURI = `${process.env.NEXT_PUBLIC_BASEURL}/import`;
  const authEndpoint = "https://accounts.spotify.com/authorize";
  const responseType = "code";
  const scope = "user-read-email user-library-read user-library-modify user-read-private user-read-playback-state user-modify-playback-state playlist-read-private playlist-modify-public playlist-modify-private user-follow-read user-follow-modify user-top-read user-read-recently-played streaming app-remote-control user-read-currently-playing user-read-playback-position ugc-image-upload"








  return (
    <div className="min-h-screen">
      <p className="text-center text-white text-5xl font-bold mt-36">
        Import You Playlist
      </p>
      <div className="flex justify-center items-center space-x-10 my-28">
        {!token && (
          <Link
            href={`${authEndpoint}?client_id=${process.env.NEXT_PUBLIC_clientId}&response_type=${responseType}&redirect_uri=${redirectURI}&scope=${scope}`}
          >
            <button className="flex items-center text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-full text-lg">
            <SlSocialSpotify className="mr-2 text-3xl"/> Import from Spotify
            </button>
          </Link>
        ) }
      </div>
      <section className="">
      <div className="translate-x-10 translate-y-20 text-white m">
          <div className="w-screen flex overflow-hidden m-10 space-x-20">
               <div className="w-1/2 h-fit flex space-x-5 items-center">
                    <div className="w-1/2 h-full">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.9"
                              stroke="currentColor" className="h-16 w-16 font-semibold">
                              <path stroke-linecap="round" stroke-linejoin="round"
                                   d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                         </svg>
                    </div>
                    <div className="">
                         <p className="text-3xl font-semibold">MANAGE</p>
                         <div className="w-3/4 text-xl text-justify tracking-wider">Lorem ipsum dolor sit amet,
                              consectetur adipisicing elit. Quos enim aut quia ducimus illum modi molestiae
                              pariatur perspiciatis accusamus dolores minima minus itaque unde, reiciendis?</div>
                    </div>
               </div>
               <div className="w-1/2 h-fit flex space-x-5 items-center">
                    <div className="w-1/2 h-full">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.9"
                              stroke="currentColor" className="h-16 w-16 font-semibold">
                              <path stroke-linecap="round" stroke-linejoin="round"
                                   d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                         </svg>
                    </div>
                    <div className="">
                         <p className="text-3xl font-semibold">ORGANIZE</p>
                         <div className="w-3/4 text-xl text-justify tracking-wider">Lorem ipsum dolor sit amet,
                              consectetur adipisicing elit. Quos enim aut quia ducimus illum modi molestiae
                              pariatur perspiciatis accusamus dolores minima minus itaque unde, reiciendis?</div>
                    </div>
               </div>
          </div>

          <div className="w-screen flex overflow-hidden m-10 space-x-20">
               <div className="w-1/2 h-fit flex space-x-5 items-center">
                    <div className="w-1/2 h-full">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.9"
                              stroke="currentColor" className="w-16 h-16">
                              <path stroke-linecap="round" stroke-linejoin="round"
                                   d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
                         </svg>

                    </div>
                    <div className="">
                         <p className="text-3xl font-semibold">FILTER</p>
                         <div className="w-3/4 text-xl text-justify tracking-wider">Lorem ipsum dolor sit amet,
                              consectetur adipisicing elit. Quos enim aut quia ducimus illum modi molestiae
                              pariatur perspiciatis accusamus dolores minima minus itaque unde, reiciendis?</div>
                    </div>
               </div>
               <div className="w-1/2 h-fit flex space-x-5 items-center">
                    <div className="w-1/2 h-full">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.9"
                              stroke="currentColor" className="w-16 h-16">
                              <path stroke-linecap="round" stroke-linejoin="round"
                                   d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                         </svg>

                    </div>
                    <div className="">
                         <p className="text-3xl font-semibold">SEARCH</p>
                         <div className="w-3/4 text-xl text-justify tracking-wider">Lorem ipsum dolor sit amet,
                              consectetur adipisicing elit. Quos enim aut quia ducimus illum modi molestiae
                              pariatur perspiciatis accusamus dolores minima minus itaque unde, reiciendis?</div>
                    </div>
               </div>
          </div>

          <div className="w-screen flex overflow-hidden m-10 space-x-20">
               <div className="w-1/2 h-fit flex space-x-5 items-center">
                    <div className="w-1/2 h-full">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.9"
                              stroke="currentColor" className="w-16 h-16">
                              <path stroke-linecap="round" stroke-linejoin="round"
                                   d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
                         </svg>
                    </div>
                    <div className="">
                         <p className="text-3xl font-semibold">ENJOY</p>
                         <div className="w-3/4 text-xl text-justify tracking-wider">Lorem ipsum dolor sit amet,
                              consectetur adipisicing elit. Quos enim aut quia ducimus illum modi molestiae
                              pariatur perspiciatis accusamus dolores minima minus itaque unde, reiciendis?</div>
                    </div>
               </div>
               <div className="w-1/2 h-fit flex space-x-5 items-center">
                    <div className="w-1/2 h-full">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.9"
                              stroke="currentColor" className="w-16 h-16">
                              <path stroke-linecap="round" stroke-linejoin="round"
                                   d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                         </svg>

                    </div>
                    <div className="">
                         <p className="text-3xl font-semibold">SHARE</p>
                         <div className="w-3/4 text-xl text-justify tracking-wider">Lorem ipsum dolor sit amet,
                              consectetur adipisicing elit. Quos enim aut quia ducimus illum modi molestiae
                              pariatur perspiciatis accusamus dolores minima minus itaque unde, reiciendis?</div>
                    </div>
               </div>
          </div>

     </div>
      </section>
    </div>
  );
};

export default Import;
