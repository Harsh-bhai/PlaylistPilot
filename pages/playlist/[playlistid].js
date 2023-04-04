import React, { useEffect, useState } from "react";
import Usespotify from "@/hooks/usespotify";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const PlaylistTracks = () => {
  const spotifyApi = Usespotify();
  const { data: session, status } = useSession();
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const router = useRouter();
  const { playlistid } = router.query;
  
  useEffect(() => {
    if (spotifyApi?.getAccessToken()) {
      spotifyApi.getPlaylistTracks(playlistid).then((data) => {
        if (data.length !== 0) {
          setPlaylistTracks(data.body.items);
        }
      });
    }
  }, [session, spotifyApi, playlistid]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto pt-10">
        <h1 className="text-4xl font-bold mb-10">Playlist Tracks</h1>
        <div className="grid grid-cols-5 gap-4">
  {playlistTracks.map((track) => (
    <div key={track.track.id} className="rounded-lg overflow-hidden">
      <img src={track.track.album.images[0]?.url} alt={track.track.album.name} className="h-40 w-full object-cover" />
      <div className="px-4 py-2">
        <h3 className="text-lg font-medium">{track.track.name}</h3>
        <p className="text-gray-400">{track.track.artists.map((artist) => artist.name).join(", ")}</p>
      </div>
    </div>
  ))}
</div>

      </div>
    </div>
  );
};

export default PlaylistTracks;
