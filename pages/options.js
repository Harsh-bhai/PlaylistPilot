import React from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'

const Options = () => {
  return (
    <div className='min-h-screen'>
      Options
      </div>
  )
}

export default Options


export async function getServerSideProps(context) {
  let res=await axios.get("https://api.spotify.com/v1/search",{
    headers:{Authorization:`Bearer ${Cookies.get('token')}`},
    // params:{q:}
  })
  let data = res.data
  return {
    props: {data},
  }
}