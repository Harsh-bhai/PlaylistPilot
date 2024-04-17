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
          {<form
          className="hidden  lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4   sm:space-y-0 space-y-4 sm:px-0 items-end md:mt-20 mb-10"
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
              <>
              <button
                key={provider.name}
                onClick={() => {
                  signIn(provider.id, { callbackUrl: "/options" });
                }}
                className="flex mx-auto items-center text-white bg-indigo-500 border-0 py-4 md:px-12 px-2 focus:outline-none hover:bg-indigo-600 rounded-full text-lg"
              >
                <SlSocialSpotify className="mr-2 text-4xl" />{" "}
                <span className=" font-semibold md:text-2xl">
                  Import From {provider.name}
                </span>
              </button>
              <h1 className="my-10 text-2xl text-center"> Import your playlist from Spotify </h1>
              </>
          );
        })}
      </div>

     
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
