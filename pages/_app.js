import '@/styles/globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Cookies from 'js-cookie'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'
import NextNProgress from 'nextjs-progressbar';
import { SessionProvider } from 'next-auth/react'



export default function App({ Component, pageProps }) {
  const Router = useRouter()
  const [reloadkey, setReloadkey] = useState(1)
  const Logout = () => {
    Cookies.remove("token")
    setReloadkey(Math.random())
    toast.success('Logged out ', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    Router.push(process.env.NEXT_PUBLIC_BASEURL)

  }


  return <>
 <SessionProvider session={session}>
 <Navbar />
  <ToastContainer
position="top-right"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
  <NextNProgress
        color="#4f46e5"
        startPosition={0.5}
        stopDelayMs={300}
        height={3}
        showOnShallow={true}
      />
     
  <Component {...pageProps} key={reloadkey}  reloadkey={reloadkey} />
  <Footer/>
 </SessionProvider>
  </>
}
