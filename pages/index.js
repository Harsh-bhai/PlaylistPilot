import { useSession } from "next-auth/react";
import Link from "next/link";
// SlSocialSpotify

// import Shootingstar from '@/components/shootingstar'

export default function Home() {   
     const { data : session,status}=useSession()
     console.log(session)


  

  return (
    <div className="min-h-screen bg-gray-800 flex flex-col py-40 items-center space-y-4">
      {/* <Shootingstar/> */}
      <div className="flex  font-bold justify-center  text-4xl  z-20 text-white">
        PlayList Pilot
      </div>
      <p className="text-2xl text-white">
        Load up, filter out and organize your playlists. here
      </p>
      <Link href={"/login"}>
        <button className=" text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-full text-lg translate-y-5 ">
          LETS GO!
        </button>{" "}
      </Link>

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
}
