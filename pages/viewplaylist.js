import React from 'react'

const Viewplaylist = ({users}) => {
  console.log('users',users)
  const prev=users.users[0].beta
  console.log("bega",prev)
  return (
    <div>
        {/* <div key={item.id} onClick={() => setDetail([...detail, { id: item.id, name: item.name }])} className="rounded-lg overflow-hidden">
      <img src={item.album.images[0]?.url} alt={item.album.name} className="w-full object-cover " />
      <div className="px-4 py-2">
        <h3 className="text-lg font-medium">{item.name}</h3>
        <p className="text-gray-400">{item.artists.map((artist) => artist.name).join(", ")}</p>
      </div>
    </div> */}
    </div>
  )
}

export default Viewplaylist

export async function getServerSideProps(context) {
  let a = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/api/getusers`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
  })
  let users = await a.json()
  return {
    props: {users}, // will be passed to the page component as props
  }
}