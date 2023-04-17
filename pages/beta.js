import React,{useState,useEffect} from 'react'
import Usespotify from "@/hooks/usespotify";
import { useSession } from "next-auth/react";
import { ToastContainer, toast } from 'react-toastify';
import User from '@/model/User';
import mongoose from 'mongoose';


const Beta = ({users}) => {
  // const [beta, setBeta] = useState()
  console.log("USers",users)
  const prev=users.users
  console.log("bega",prev)
  // console.log("here",...users.users[0])
  const [userinfo, setUserinfo] = useState()
  useEffect(() => {
    
    if (spotifyapi.getAccessToken()){
      

     
    }
  }, [])
  
const spotifyapi=Usespotify()
const [form, setform] = useState({
  name:'',
  url:'',
  imgurl:'',
  tags:[],
  artistname:[],


})
  const handlechange = (e) => {
    
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const handlesubmit = async (e) => {
    
    e.preventDefault();
    const data={
      userinfo:users?.users?.userinfo,
      beta:{[form.name]:{
        url:form.url,
        imgurl:form.imgurl,
        tags:form.tags.split(',').map(e=>e.trim()),
        artistname:form.artistname.split(',').map(e=>e.trim()),}}
    
    
    }
    setform({
      name:'',
      url:'',
      imgurl:'',
      tags:[],
      artistname:[],
    
    
    })
    toast.success('Track Added ', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
    
    
   
    console.log(form,"form")
    console.log(data,"data")
    let a=await fetch('http://localhost:3000/api/updatebetausers',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
    })
    let response=await a.json()
    console.log(response)

//write json here

}
  return (
    <div>
      <section className="text-gray-100 body-font relative">
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
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-gray-800 rounded-lg overflow-hidden sm:mr-10 p-10 flex flex-col items-center justify-start relative">
      <img src="/logo.svg" alt="" className='h-40 my-10'/>
      <p className='text-5xl font-semibold'>Add Songs</p>
      {/* <div className="songdetails flex flex-col space-y-10">
      <p>Song Name : {form.name}</p>
      
      <p>Artist Name : {form.artistname>0 && form.artistname.map((item)=>{''.join(item)})}</p>
      <p>Tags Name : {form.name}</p>
      <p>Song Name : {form.name}</p>
      </div> */}
      {/* <iframe width="100%" height="100%" className="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=100&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" style="filter: grayscale(1) contrast(1.2) opacity(0.4);"></iframe> */}
      
    </div>
    <form onSubmit={handlesubmit} className="lg:w-1/3 md:w-1/2 bg-gray-900 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 rounded-lg p-4">
      <h2 className="text-white text-lg mb-1 font-medium title-font text-c">Song Details</h2>
      <div className="relative mb-4">
        <label for="name" className="leading-7 text-sm text-gray-100">Name</label>
        <input value={form.name} onChange={handlechange} type="text" id="name" name="name" className="w-full bg-gray-700 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label for="url" className="leading-7 text-sm text-gray-100">Song Link</label>
        <input value={form.url} onChange={handlechange} type="text" id="url" name="url" className="w-full bg-gray-700 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label for="imgurl" className="leading-7 text-sm text-gray-100">Image Link</label>
        <input value={form.imgurl} onChange={handlechange} type="text" id="imgurl" name="imgurl" className="w-full bg-gray-700 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label for="artistname" className="leading-7 text-sm text-gray-100">Artist Name</label>
        <input value={form.artistname} onChange={handlechange} type="text" id="artistname" name="artistname" className="w-full bg-gray-700 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label for="tags" className="leading-7 text-sm text-gray-100">Tags</label>
        <textarea placeholder='Seperate the text by spaces' type="text" onChange={handlechange} value={form.tags} id="tags" name="tags" className="w-full bg-gray-700 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-800 rounded text-lg">Button</button>
      {/* <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p> */}
    </form>
  </div>
</section>
    </div>
  )
}

export default Beta

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let spotifyid = context.req.cookies["spotifyid"];
  let users = await User.find({ id: spotifyid });
 
 
  return {
    props: { users: JSON.parse(JSON.stringify(users))}, // will be passed to the page component as props
  }
}