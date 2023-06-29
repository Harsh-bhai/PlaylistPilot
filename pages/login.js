import React, { useState,useEffect } from "react";
import { getProviders, signIn } from "next-auth/react";
import { SlSocialSpotify } from "react-icons/sl";
import {  toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = ({ providers }) => {
  //   console.log(providers, "provider");
  const [registered, setRegistered] = useState(false);
  const [reloadkey, setReloadkey] = useState(1)

  const handlechange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

//   useEffect(() => {
//     setRegistered(true)

//   }, [reloadkey])
  
  const handlesubmit = async (e) => {
     e.preventDefault();
   
     try {
          let a =fetch(`${process.env.NEXT_PUBLIC_BASEURL}/api/register`, {
               method: "POST",
               headers: {
                 "Content-Type": "application/json",
               },
               body: JSON.stringify(form),
             })
       toast.promise(a
         ,
         {
           pending: 'Registering...',
           success: 'Registered Successfully',
           error: 'Failed to Register',
         }
       );
   
       let response = await a
     console.log(response)
       if (response.status===200) {
          setReloadkey(Math.random())
         setRegistered(true);
       } else {
         setRegistered(false);
       }
     } catch (error) {
       console.log(error)
     //   setRegistered(false);
     }
   };
   console.log(registered,"hjere")

  const [form, setform] = useState({ name: "", email: "" });

  return (
    <div key={reloadkey} className="text-white min-h-screen">
      <h1 className="text-center font-semibold text-5xl mt-28">Login</h1>
      <div className="flex flex-col m-16 items-center text-white ">
       {!registered && <h1 className="text-2xl  md:-translate-x-9">
          In order to use PlaylistPilot you have to Register with your Username
          and Email Id.
        </h1>}
        { !registered &&
          <form
          className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end md:mt-20 mb-10"
          onSubmit={handlesubmit}
        >
          <div className="relative flex-grow w-full">
            <label htmlFor="name" className="leading-7 text-sm text-white">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={form.name}
              onChange={handlechange}
              name="name"
              placeholder="Enter any username"
              className="w-full bg-gray-700 bg-opacity-50 rounded border border-white focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative flex-grow w-full">
            <label htmlFor="email" className="leading-7 text-sm text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={form.email}
              onChange={handlechange}
              name="email"
              placeholder="enter spotify email "
              className="w-full bg-gray-700 bg-opacity-50 rounded border border-white focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-full text-lg">
            Register
          </button>
        </form>
        }

        {Object.values(providers).map((provider) => {
          return (
            registered && (
              <>
              <button
                key={provider.name}
                onClick={() => {
                  signIn(provider.id, { callbackUrl: "/options" });
                  //     toast.success("Logged In ", {
                  //       position: "top-right",
                  //       autoClose: 1000,
                  //       hideProgressBar: false,
                  //       closeOnClick: true,
                  //       pauseOnHover: true,
                  //       draggable: true,
                  //       progress: undefined,
                  //       theme: "dark",
                  //     });
                }}
                className="flex mx-auto items-center text-white bg-indigo-500 border-0 py-4 px-12 focus:outline-none hover:bg-indigo-600 rounded-full text-lg"
              >
                <SlSocialSpotify className="mr-2 text-4xl" />{" "}
                <span className=" font-semibold text-2xl">
                  Import From {provider.name}
                </span>
              </button>
              <h1 className="my-10 text-2xl"> Import your playlist from Spotify </h1>
              </>
            )
          );
        })}
      </div>
      {/* <div className="lg:-translate-x-10 m-10 my-40 text-white">
          <div className="m-5 lg:m-16 space-y-10 h-screen items-center ">

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
                              <p className="text-xl sm:text-2xl md:text-3xl  font-semibold ">MANAGE</p>
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
     </div> */}
    </div>
  );
};

export default Login;
export async function getServerSideProps() {
  try {
    const providers = await getProviders();
    return { props: { providers } };
  } catch (error) {
    console.log("Error fetching providers:", error);
    return { props: { providers: {} } };
  }
}
