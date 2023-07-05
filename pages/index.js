import Shootingstar from "@/components/shootingstar";
import { useSession } from "next-auth/react";
import Link from "next/link";
// SlSocialSpotify

// import Shootingstar from '@/components/shootingstar'

export default function Home() {   
     // const { data : session,status}=useSession()
     // console.log(session)
     // console.log()
     const mysession =useSession()
     console.log(mysession)
     
     
     
     
     return (
          <div className="min-h-screen bg-gray-800 flex flex-col items-center space-y-4">
      {/* <Shootingstar/> */}
      <div className="flex flex-col justify-center items-center pt-16 ">
      <div className="flex space-x-10 -translate-x-16">
          <img src="/logo.svg" alt="" className="h-72 animate-infsymbol" />
          <div className="flex justify-center items-center flex-col mb-20 relative">
      <div className="flex  font-bold justify-center py-4 pt-20  text-7xl  z-20 bg-clip-text text-transparent bg-gradient-to-tr from-white via-indigo-500 to-white">
        PlayList Pilot
      </div>
      <p className="flex-wrap text-lg  mr-10 font-semibold mx-2 absolute translate-y-[6.5rem] text-gray-300 pb-2">
      Organize your music - with the power of TAGS 
      </p>
      
        
      
      </div>
      </div>
      < Link href={"/login"}>
      <button className=" text-white bg-gradient-to-tr from-indigo-500 via-blue-500 to-purple-500 border-0 py-4 px-12 animate-pulse focus:outline-none hover:bg-indigo-600 rounded-full text-2xl font-semibold -translate-y-8 ">
          LETS GO!
        </button>{" "}
        </Link>
      </div>
      <style jsx>{`
      @keyframes infinite {
          0% {
            transform:  scale(1);
          }
         
          50% {
            transform:  scale(1.1);
          }
          100% {
            transform:scale(1);
          }
        }
        
        .animate-infsymbol {
          animation-name: infinite;
          animation-duration: 4s;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }`}</style>
     

      <div className="lg:-translate-x-10 m-10  text-white">
          <div className="m-5 lg:m-16 space-y-10  items-center ">

               <div className="sm:flex sm:space-y-0 sm:space-x-8 lg:space-x-16 space-y-4">

                    <div className="w-full h-fit flex space-x-5 items-center p-2 hover:shadow-[2px_2px_6px_pink] rounded-xl sm:w-1/2 hover:scale-105 lg:hover:scale-110 duration-500">
                         <div className="w-fit h-full p-1 rounded-xl shadow-[1px_1px_z_pink]">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.1"
                                   stroke="pink" className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 ">
                                   <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                              </svg>
                         </div>
                         <div className="space-y-4">
                         <p className="text-xl sm:text-2xl md:text-3xl  font-semibold underline bg-gradient-to">MANAGE</p>
                              <div className="w-full text-lg md:text-xl  text-justify tracking-wider">Manage your playlists, songs with PlaylistPilot by using TAG system</div>
                         </div>
                    </div>
               
                    <div className="w-full h-fit flex space-x-5 items-center p-2 hover:shadow-[2px_2px_6px_lightblue] rounded-xl sm:w-1/2 hover:scale-105 duration-500">
                         <div className="w-fit h-full p-1 rounded-xl shadow-[1px_1px_3px_lightblue]">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.9"
                              stroke="lightblue" className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 ">
                              <path strokeLinecap="round" strokeLinejoin="round"
                                   d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                              </svg>
                         </div>
                         <div className="space-y-4">
                              <p className="text-xl sm:text-2xl md:text-3xl  font-semibold underline bg-gradient-to">ORGANIZE</p>
                              <div className="w-full text-lg md:text-xl  text-justify tracking-wider">Oranize your playlists, songs according to your Mood using TAGS</div>
                         </div>
                    </div>

               </div>


               <div className="sm:flex sm:space-y-0 sm:space-x-8 lg:space-x-16 space-y-4">

                    <div className="w-full h-fit flex space-x-5 items-center p-2 hover:shadow-[2px_2px_6px_green] rounded-xl sm:w-1/2 hover:scale-105 duration-500">
                         <div className="w-fit h-full p-1 rounded-xl shadow-[1px_1px_3px_green]">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.9"
                                   stroke="green"  className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 ">
                                   <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
                              </svg>
                         </div>
                         <div className="space-y-4">
                              <p className="text-xl sm:text-2xl md:text-3xl  font-semibold underline bg-gradient-to">FILTER</p>
                              <div className="w-full text-lg md:text-xl  text-justify tracking-wider">Filter out songs from your playlists  according to your Mood. Filter songs on the basis of TAGS</div>
                         </div>
                    </div>
               
                    <div className="w-full h-fit flex space-x-5 items-center p-2 hover:shadow-[2px_2px_6px_yellow] rounded-xl sm:w-1/2 hover:scale-105 duration-500">
                         <div className="w-fit h-full p-1 rounded-xl shadow-[1px_1px_3px_yellow]">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.9"
                                   stroke="yellow" className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 ">
                                   <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                              </svg>
                         </div>
                         <div className="space-y-4">
                              <p className="text-xl sm:text-2xl md:text-3xl  font-semibold underline bg-gradient-to">CREATE</p>
                              <div className="w-full text-lg md:text-xl  text-justify tracking-wider">Use your Creativity and Create best  playlists according to your Mood</div>
                         </div>
                    </div>

               </div>

               <div className="sm:flex sm:space-y-0 sm:space-x-8 lg:space-x-16 space-y-4">

                    <div className="w-full h-fit flex space-x-5 items-center p-2 hover:shadow-[2px_2px_6px_red] rounded-xl hover:scale-105 duration-500">
                         <div className="w-fit h-full p-1 rounded-xl shadow-[1px_1px_3px_red]">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.9"
                              stroke="red" className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 ">
                              <path strokeLinecap="round" strokeLinejoin="round"
                                   d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
                              </svg>
                         </div>
                         <div className="space-y-4">
                              <p className="text-xl sm:text-2xl md:text-3xl  font-semibold underline bg-gradient-to">VARIETY</p>
                              <div className="w-full text-lg md:text-xl  text-justify tracking-wider">PlaylistPilot gives you free hand, you can add even Youtube songs and other music links  to your playlist </div>
                         </div>
                    </div>
               
                   

               </div>
          </div>
     </div>
    </div>
  );
}
