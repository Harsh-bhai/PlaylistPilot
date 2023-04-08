import React,{useState} from 'react'
import { useRouter } from 'next/router'
const Tags = () => {
  const [playlistName, setPlaylistName] = useState('')
  const [playlistDescription, setPlaylistDescription] = useState('')
    const Router=useRouter()
    const {tags}=Router.query
    const handleSubmit = (e) => {
      e.preventDefault()
      // Handle playlist creation logic here
    }
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <form onSubmit={handleSubmit} className="max-w-md w-full">
          <div className="mb-4">
            <label htmlFor="playlistName" className="block text-gray-700 font-bold mb-2">
              Playlist Name
            </label>
            <input
              id="playlistName"
              type="text"
              value={playlistName}
              onChange={(e) => setPlaylistName(e.target.value)}
              placeholder="Enter playlist name"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="playlistDescription" className="block text-gray-700 font-bold mb-2">
              Playlist Description
            </label>
            <textarea
              id="playlistDescription"
              value={playlistDescription}
              onChange={(e) => setPlaylistDescription(e.target.value)}
              placeholder="Enter playlist description"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Create Playlist
          </button>
        </form>
      </div>
    )
}

export default Tags