import React from "react";

const About = () => {
  const data = [
    {
      title: "Select Option",
      description: "Click on the Add Tag option to proceed",
      img: "0.png",
    },
    {
      title: "Select playlist",
      description:
        "You will get a list of all of your liked (or created) playlists. Select any of them to get started.",
      img: "1.png",
    },
    {
      title: "Add TAGS",
      description:
        "You can add any TAG to any song. You can add tag according to singer, type of song, mood etc.",
      img: "2.png",
    },
    {
      title: "Click on TAG",
      description:
        "Click on the TAG to generate the playlist containing only songs that contain that specific TAG.",
      img: "3.png",
    },
    {
      title: "Playlist Generated",
      description:
        "Hurray! Your playlist is generated with the songs that contain that specific TAG. Now you can enjoy your playlist.",
      img: "4.png",
    },
    {
      title: "Exported",
      description:
        "Your playlist is exported. You can see your playlist in your Spotify account.",
      img: "5.png",
    },
  ];
  return (
    <section className="text-white body-font">
      <div className="flex flex-col text-center w-full my-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-indigo-400">
          What is PlaylistPilot
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-xl">
          PlayListPilot is a web app that helps you organize your music with the help of TAGS. It allows you to create, modify playlist on the basis of TAGS. Lets see how it works.
        </p>
      </div>

      <div className="container px-5 py-10 mx-auto flex flex-wrap">
        <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
          <div className="w-full sm:p-4 px-4 mb-6">
            <h1 className="title-font font-medium md:text-3xl text-xl  mb-2 text-indigo-400">
              How to Register?
            </h1>
            <div className="leading-relaxed">
              This is a Spotify (Spotify for Developers) app which can only be
              used if you are register for the app. Only creator of the app can
              register you as a user and only limited 25 users can use this app.
              If you want to use this app, you can send your name and email to
              harshdewangan2019@gmail.com, and we will get back to you soon.
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
          <img
            className="object-cover border border-black shadow-lg object-center w-full h-full"
            src="app.png"
            alt="stats"
          />
        </div>
      </div>
      <section className="text-white body-font">
        <div className="container px-5 py-10 mx-auto">
          <h1 className="title-font font-medium md:text-3xl text-xl  mb-10 text-indigo-400">
            How to Use?
          </h1>
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            {data.map((item, index) => {
              return (
                <div key={item.img} className="sm:w-1/2   mb-10 px-4">
                  <div
                    className={`rounded-lg h-64 hover:scale-150 hover:transition-transform duration-300 overflow-hidden border border-black shadow-lg ${
                      index % 2 === 0
                        ? "hover:md:translate-x-40"
                        : "hover:md:-translate-x-40"
                    } hover:cursor-crosshair`}
                  >
                    <img
                      alt="content"
                      className="object-center   h-full w-full"
                      src={`/${item.img}`}
                    />
                  </div>
                  <h2 className="title-font text-2xl font-medium text-indigo-400 mt-6 mb-3">
                    {item.title}
                  </h2>
                  <p className="leading-relaxed text-base">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
