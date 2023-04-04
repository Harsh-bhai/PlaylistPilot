import React, { useState } from "react";

const handleChange = (e) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
  e.preventDefault();
  const data = {};
  console.log(data);
  await fetch(`${process.env.NEXT_PUBLIC_BHOST}/api/updateusers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export default function SongItem() {
  const [settings, setSettings] = useState(false);
  return (
    <div>
      <button
        onClick={() => (settings ? setSettings(false) : setSettings(true))}
        className='leading-7 text-sm text-gray-100'
      >
        Edit
      </button>
      {settings && (
        <section className='text-gray-600 body-font relative'>
          <div className='container px-5 py-24 mx-auto'>
            <div className='flex flex-col text-center w-full mb-12'>
              <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
                Add Song
              </h1>
            </div>
            <div className='lg:w-1/2 md:w-2/3 mx-auto'>
              <div className='flex flex-wrap -m-2'>
                <div className='p-2 w-1/2'>
                  <div className='relative'>
                    <label
                      for='name'
                      className='leading-7 text-sm text-gray-100'
                    >
                      Name
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      className='w-full bg-gray-900 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-gray-700 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                    />
                  </div>
                </div>
                <div className='p-2 w-1/2'>
                  <div className='relative'>
                    <label
                      for='email'
                      className='leading-7 text-sm text-gray-100'
                    >
                      Email
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      className='w-full bg-gray-900 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-gray-700 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                    />
                  </div>
                </div>
                <div className='p-2 w-full'>
                  <div className='relative'>
                    <label
                      for='message'
                      className='leading-7 text-sm text-gray-100'
                    >
                      Message
                    </label>
                    <textarea
                      id='message'
                      name='message'
                      className='w-full bg-gray-900 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-gray-700 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
                    ></textarea>
                  </div>
                </div>
                <div className='p-2 w-full'>
                  <button className='flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
                    Button
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
