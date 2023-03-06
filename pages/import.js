import React from 'react'

const Import = () => {
  return (
    <div className='min-h-screen'>
        <p className='text-center text-white text-5xl font-bold my-10'>Import You Playlist</p>
        <div className="flex justify-center items-center space-x-10 my-40">
        <button class=" text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-full text-lg">Import from Spotify</button>
        <button class=" text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-full text-lg">Import from Gallery</button>
        </div>
    </div>
  )
}

export default Import