import connectDB from "@/middleware/mongoose";
import User from "@/model/User";

const handler = async(req,res)=>{
    let users=await User.find()
    res.status(200).json({ user_count:users.length,users:users })

}

export default connectDB(handler)