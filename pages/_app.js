import '@/styles/globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Cookies from 'js-cookie'
import { useState } from 'react'

export default function App({ Component, pageProps }) {
  const [reloadkey, setReloadkey] = useState(1)
  const Logout= (  ) => {
    Cookies.remove("token")
    setReloadkey(Math.random())
  }


  return <>
  <Navbar/>
  
  <Component {...pageProps} key={reloadkey} Logout={Logout} reloadkey={reloadkey} />
  <Footer/>
  </>
}
