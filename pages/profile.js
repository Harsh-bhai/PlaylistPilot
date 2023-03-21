import Cookies from 'js-cookie'
import React from 'react'

const Profile = ({user}) => {
    console.log(user,"sjdflkfjg")
  return (
   <div className="text-white">
    <div className="info flex justify-center space-x-40 items-center">
    <div className="pfp m-8 relative">
        <div className="img bg-black absolute translate-y-28">kajdlkjdas</div>
        <img className=' z-20 rounded-full h-60 object-cover object-center w-60' src="https://media.istockphoto.com/id/1300972574/photo/millennial-male-team-leader-organize-virtual-workshop-with-employees-online.jpg?b=1&s=170667a&w=0&k=20&c=96pCQon1xF3_onEkkckNg4cC9SCbshMvx0CfKl2ZiYs=" alt="" />
    </div>
    <div className='about flex flex-col space-y-2'>
        <p className='text-4xl font-semibold'>{user.display_name}</p>
        <p>{user.id}</p>
        <p>{user.email}</p>
    </div>
    </div>
    <div className='moreinfo'>

<p>Country:</p>
<p>Follwers:</p>
<p>Spotify profile URL:</p>
    </div>
   </div>

   



  )
}

export default Profile

export async function getServerSideProps(context) {
    let a = await fetch("https://api.spotify.com/v1/me",{
        method:"GET",
        headers:{
            'Content-Type':'application/json',
            "Authorization":`Bearer BQAzRLDe2EW9HfPf0RSqWrdj2VGEAzDiwjndsvuh8vdo9RnGSONTNgIDbEs_RpReyxbUA1wg7wUFmPRNwW3MniLGhHSRQ5l9rIHsUWs068KfNxkzTIjXZzmYP28RpDLRZdQODfZkgCSt4PhNoD4EuvBArTKJZqXz6XJKysaUUEnuVQZAUIcKi8xTEzkdaCaIAUEPHmIUlhiyqP-JB5e_boxGP3ZRPC9ZOZLkFmej3oHfwLzMPhJB5_1ZgehcbQ7CQtyWsnXKi6N20ujZkMu2J6icBbcULNgTymXEa1XKzJ9g1-pHVlvKhOCar_VutHYXu2wfgM9xCJudPmrF`
        }
    })
    let user= await a.json()
    return {
      props: {user}, // will be passed to the page component as props
    }
  }