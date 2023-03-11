import '@/styles/globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Cookies from 'js-cookie'
import { useState } from 'react'

import NextNProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps }) {
  const [reloadkey, setReloadkey] = useState(1)
  const Logout= (  ) => {
    Cookies.remove("token")
    setReloadkey(Math.random())
  }


  return <>
  <Navbar/>
  <NextNProgress
        color="#4f46e5"
        startPosition={0.5}
        stopDelayMs={300}
        height={3}
        showOnShallow={true}
      />
  <Component {...pageProps} key={reloadkey} Logout={Logout} reloadkey={reloadkey} />
  <Footer/>
  </>
}
