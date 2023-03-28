import Cookies from "js-cookie";
import Link from "next/link";
import React from "react";

const Profile = ({ user }) => {
  console.log(user, "sjdflkfjg");
  console.log(Cookies.get("token"));
  return (
    <div className="flex place-content-center place-items-center w-screen h-screen bg-gray-800 overflow-hidden">
      <div className="flex px-5 py-10 border-4 m-2 rounded-2xl ">
        <div className="info text-white justify-center items-center sm:flex sm:space-x-40 m-auto">
          <div className="pfp m-10 ">
            <img
              className="rounded-full h-60 w-60 sm:h-96 sm:w-96 object-cover object-center border-4 border-white"
              src={`${user.images[0].url}`}
              alt=""
            />
          </div>
          <div className="about flex flex-col items-center space-y-3 tracking-wider sm:space-y-5">
            <p className="text-4xl sm:text-5xl font-semibold">
              {user.display_name}
            </p>
            <div className="flex">
              <p className="text-2xl">Spotify ID :</p>{" "}
              <p className="text-green-400 text-2xl">{user.id}</p>
            </div>
            <div className="flex">
              <p className="text-2xl">Email ID :</p>{" "}
              <p className="text-green-400 text-2xl">{user.email}</p>
            </div>
            <div className="flex">
              <p className="text-2xl">Country :</p>{" "}
              <p className="text-green-400 text-2xl">{user.country}</p>
            </div>
            <div className="flex">
              <p className="text-2xl">Followers :</p>{" "}
              <p className="text-green-400 text-2xl">{user.followers.total}</p>
            </div>
            <div className="flex flex-wrap justify-center">
              <p className="text-2xl  ">Spotify profile URL  : </p>{" "}
              <a target={'_blank'} href={user.external_urls.spotify} className="text-green-400 text-2xl">
                {user.external_urls.spotify}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

export async function getServerSideProps(context) {
  let a = await fetch("https://api.spotify.com/v1/me", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer BQBtHaCnBsoRgDrh1o82cwQL3QthVfBD0iyGIkHZsxNjgHCEQ4tsfBTICiJ3bPoUEWYMGJexBuyFXtwvC9ggKckD2AL4ss9v1jgRn2DIhPxcx_ZyDeI9rnhnLRua57nJFEFME6tnY6JHaIiLyZdzs7XuPHrZ8ysRvfUbhzdpGwtQvgEGjZ6H3FJVmmWi-SrfNmkpR486paOTfkb5L_A09Q04AHmezpP0lOip6PYAyC-RObAecc-M0J9SnS_9laUy1OnPfIY1Vas-ViHyZ-tfEftyFwiwOSyBnjLXSFqpNah66e5ajaIoeQgp7QYnZAsVuJh-sgAgnMXR4d15pu8`,
    },
  });
  let user = await a.json();

  return {
    props: { user }, // will be passed to the page component as props
  };
}
