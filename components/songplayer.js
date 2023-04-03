import { useState, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { AiFillSound } from "react-icons/ai";
import Usespotify from "@/hooks/usespotify";
import { useSession } from "next-auth/react";

const SongPlayer = ({ song }) => {
// console.log(song,"sopng")
    const spotifyApi = Usespotify();
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({});
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(50);
  const { data: session, status } = useSession();


//   useEffect(() => {
//     if (!accessToken) return;
//     spotifyApi.setAccessToken(accessToken);
//     spotifyApi.getMyCurrentPlaybackState().then((res) => {
//       setIsPlaying(res?.is_playing);
//       setSongInfo({
//         title: res?.item?.name,
//         artist: res?.item?.artists?.[0]?.name,
//         album: res?.item?.album?.name,
//         image: res?.item?.album?.images?.[0]?.url,
//       });
//     });
//   }, [accessToken]);
useEffect(() => {
    if ( spotifyApi.getAccessToken()){
      spotifyApi.getMyCurrentPlaybackState().then((data)=>{
        setIsPlaying(data?.is_playing)
        console.log(data)
      })
   
    // const interval = setInterval(() => {
    //   updateProgress();
    // }, 1000);
    // return () => clearInterval(interval);
  }
  }, [session,spotifyApi])

  const togglePlay = () => {
    if(spotifyApi.getAccessToken){
      if (isPlaying) {
        spotifyApi.pause();
      } else {
        spotifyApi.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const updateProgress = () => {
    if (spotifyApi.getAccessToken()){
      spotifyApi.getMyCurrentPlaybackState().then((res) => {
        const { progress_ms, item } = res;
        setIsPlaying(res?.is_playing);
        let a=spotifyApi.getTrack(song)
        console.log(a)
        setSongInfo(
        //   {
        //   title: item?.name,
        //   artist: item?.artists?.[0]?.name,
        //   album: item?.album?.name,
        //   image: item?.album?.images?.[0]?.url,
        // }
        );
        setProgress((progress_ms / item?.duration_ms) * 100);
      });
    }
  };

  const setPlaybackVolume = (value) => {
    spotifyApi.setVolume(value).then(() => {
      setVolume(value);
    });
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="bg-gray-800 p-4 fixed bottom-0 left-0 w-full flex items-center justify-between">
      <div className="flex items-center">
        <div
          className="rounded-full bg-gray-700 w-12 h-12 flex items-center justify-center cursor-pointer"
          onClick={togglePlay}
        >
          {isPlaying ? (
            <FaPause className="text-white text-xl" />
          ) : (
            <FaPlay className="text-white text-xl" />
          )}
        </div>
        {songInfo?.image && (
          <div className="ml-4">
            <img src={songInfo.image} alt="Album Cover" className="w-12 h-12" />
          </div>
        )}
        <div className="ml-4">
          <p className="text-white">{songInfo?.title}</p>
          <p className="text-gray-400 text-sm">{songInfo?.artist}</p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="mr-4 text-white">
          <p>{formatTime(progress / 1000)}</p>
          <p className="text-gray-400 text-sm">
            {formatTime(songInfo?.duration_ms || 0)}
          </p>
        </div>
        <div className="flex items-center">
          <div className="mr-4">
            <AiFillSound className="text-white text-xl" />
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => setPlaybackVolume(e.target.value)}
            className="w-16 h-1 bg-gray-600 rounded-full appearance-none outline-none"
          />
        </div>
      </div>    
    </div>
  );
};

export default SongPlayer;

// export async function getServerSideProps(context) {
//   const song = await context?.query?.songplayer
//   return {
//     props: {song}, // will be passed to the page component as props
//   }
// }