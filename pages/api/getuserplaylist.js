import connectDB from "@/middleware/mongoose";
import User from "@/model/User";
import Cookies from "js-cookie";

const handler = async(req,res)=>{
    let users=await User.find()
    let userid=users.id
    let a= await fetch('https://api.spotify.com/v1/me/playlists',{
        method:"POST",
        headers:{
            "Authorization":`Bearer ${Cookies.get('token')}`
        }
    })
    res.status(200).json({ a })

}

export default connectDB(handler)