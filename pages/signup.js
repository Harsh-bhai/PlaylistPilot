import React from 'react'

const Signup = () => {
  return (
    <div className='bg-gray-800'>
          <div className="flex justify-center items-center   ">
        <div
            className="space-y-10 border-4 border-black rounded-2xl shadow-xl shadow-slate-400 w-fit h-fit py-20 px-28 my-10 bg-gray-800 ">
            <h1
                className="text-4xl font-semibold leading-loose underline decoration-cyan-400 decoration-4 underline-offset-[10px]">
                Sign In</h1>
            <form className="space-y-16" action="Login.html" method="post">
                <div className="flex space-x-2 justify-center items-center ">
                    <input className="active:border-4 active:border-white p-1 border-2 border-black rounded-md ml-10"
                        type="text" name="First_Name" id="First_Name" placeholder=" First Name" required />
                </div>
                <div className="flex space-x-2 justify-center items-center ">
                    <input className="active:border-4 active:border-white p-1 border-2 border-black rounded-md ml-10"
                        type="text" name="Last_Name" id="Last_Name" placeholder="Last Name" required />
                </div>
                <div className="flex space-x-2 justify-center items-center ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z" />
                    </svg>
                    <input className="active:border-4 active:border-white p-1 border-2 border-black rounded-md" type="text"
                        name="DOB" id="DOB" placeholder="Create Date of Birth" required/>
                </div>
                <div className="flex space-x-2 justify-center items-center ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    <input className="active:border-4 active:border-white p-1 border-2 border-black rounded-md" type="text"
                        name="User_Name" id="User_Name" placeholder="Create Your User Name" required/>
                </div>
                <div className="flex space-x-2 justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                    <input className="active:border-2 active:border-white p-1 border-2 border-black rounded-md" type="text"
                        name="Password" id="Password" placeholder="Make your Password" required/>
                </div>
                <div className="flex space-x-2 justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <input className="active:border-2 active:border-white p-1 border-2 border-black rounded-md" type="text"
                        name="Mail" id="Mail" placeholder="Enter Your Mail " required/>
                </div>
                <div className="flex space-x-2 justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    <input className="active:border-2 active:border-white p-1 border-2 border-black rounded-md" type="text"
                        name="Phone" id="Phone" placeholder="Enter Your Phone Number " required/>
                </div>
                
                <div className=" m-auto w-fit h-fit p-0.5 rounded-3xl bg-gradient-to-r from-yellow-500 to bg-cyan-500">
                    <input type="submit" value="Sign In"
                    className="m-auto w-fit h-fit rounded-3xl p-2 px-12 bg-gradient-to-r from-pink-500 to bg-purple-500 cursor-pointer"/>
                </div>
            </form>

            <div className="ml-14">
                <a href="Login.html"
                    className="cursor-pointer flex  space-x-3 font-semibold hover:underline hover:decoration-2 hover:underline-offset-4">
                    <div>
                        Alread Have An Account
                    </div> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </a>
            </div>
            <div className="space-y-2">
                <div className="flex space-x-3">
                    <div>
                        <script
                            src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
                        <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_vnqzcze6.json"
                            background="transparent" speed="1" style = {{ width: "50px", height: "50px" }} loop
                            autoplay></lottie-player>
                    </div>
                    <div>
                        <script
                            src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
                        <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_7akxvutj.json"
                            background="transparent" speed="1" style = {{ width: "50px", height: "50px" }} loop
                            autoplay></lottie-player>
                    </div>
                    <div>
                        <script
                            src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
                        <lottie-player src="https://assets10.lottiefiles.com/private_files/lf30_qnpfavmd.json"
                            background="transparent" speed="1" style = {{ width: "50px", height: "50px" }} loop
                            autoplay></lottie-player>
                    </div>
                    <div>
                        <script
                            src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
                        <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_hdy0htc2.json"
                            background="transparent" speed="1" style = {{ width: "50px", height: "50px" }} loop
                            autoplay></lottie-player>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Signup