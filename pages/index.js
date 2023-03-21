import Link from "next/link";

// import Shootingstar from '@/components/shootingstar'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-800 flex flex-col py-40 items-center space-y-4">
      {/* <Shootingstar/> */}
      <div className="flex  font-bold justify-center  text-4xl  z-20 text-white">
        Satisfy Your OCD
      </div>
      <p className="text-2xl text-white">
        Load up, filter out and organize your playlists.
      </p>
      <Link href={"/import"}>
        <button className=" text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-full text-lg translate-y-5 ">
          LETS GO!
        </button>{" "}
      </Link>
    </div>
  );
}
