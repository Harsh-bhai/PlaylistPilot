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
      Authorization: `Bearer BQCe_ml7bPZme7AyXs4a-ubG5GNBLRFOp7A1Uk1MqpWGUMEfek7Ey5QXdoLUCz-pI62lbNV8motD_6qNGbp9CouMaYTXKzJFJTeLpw8psNn0GXjHv_xYZZXhYU0EXPMAAYpP1BIXe6SLWPuf6-AVqlJEPAHHT1yo_RQKupVVQcA_6CYoVSRFdx6XWC-Xjepk5G7GGBIfOgWLg86hE6HDr5pH_PRC6YlLtVOCVp1sw3AcVkRUJcRO9W1UJidKsxTpHrqGC0SAm-RECKg9ovPCaaCARJQFuCkrcij5G_valHo8a7M5GxhzW_Se3E6XMp-idNHCM84h3Dr7Y9D_daE`,
    },
  });
  let user = await a.json();

  return {
    props: { user }, // will be passed to the page component as props
  };
}
