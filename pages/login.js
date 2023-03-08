import React from 'react'

const Login = () => {
  return (
    <div className='bg-gray-800'>
      <div className="flex justify-center items-center bg-white h-screen">
    <div
        className="space-y-10 border-2 rounded-2xl p-5 shadow-xl shadow-slate-400 w-fit h-fit py-20 px-20 my-10 bg-white  ">
        <h1
            className="text-4xl font-semibold leading-loose underline underline-offset-[10px] decoration-6 decoration-black">
            Login</h1>
        <form action="Login.html" className="space-y-14">
            <div className="flex space-x-2 justify-center items-center ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                <input className="active:border-4 active:border-white border-2 border-black p-1 rounded-md" type="text"
                    name="" id="" placeholder="Enter your User Name"/>
            </div>
            <div className="flex space-x-2 justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
                <input className="active:border-2 active:border-white border-2 border-black p-1 rounded-md" type="text"
                    name="" id="" placeholder="Enter your Password"/>
            </div>
            <div className=" m-auto w-fit h-fit p-0.5 rounded-3xl bg-gradient-to-r from-yellow-500 to bg-cyan-500"><button
                    className="w-fit h-fit rounded-3xl p-2 px-12 bg-gradient-to-r from-pink-500 to bg-purple-500">Login</button>
            </div>
            <div className="flex space-x-3 ml-10 cursor-pointer">
                <a href="Signin.html">Make a New Account</a><svg
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
            </div>
        </form>

        <div className="space-y-2">
            <div className="flex space-x-3">
                <div>
                    <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
                    <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_vnqzcze6.json"
                        background="transparent" speed="1" style = {{ width: "50px", height: "50px" }} loop
                        autoplay></lottie-player>
                </div>
                <div>
                    <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
                    <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_7akxvutj.json"
                        background="transparent" speed="1" style = {{ width: "50px", height: "50px" }} loop
                        autoplay></lottie-player>
                </div>
                <div>
                    <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
                    <lottie-player src="https://assets10.lottiefiles.com/private_files/lf30_qnpfavmd.json"
                        background="transparent" speed="1" style = {{ width: "50px", height: "50px" }} loop
                        autoplay></lottie-player>
                </div>
                <div>
                    <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
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

export default Login