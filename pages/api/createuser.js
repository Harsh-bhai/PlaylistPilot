import connectDB from "@/middleware/mongoose";
import User from "@/model/User";

const handler = async(req,res)=>{
    if (req.method == 'POST') {
            let p =await User.create(req.body)
            await p.save()
        res.status(200).json({ success:"huge success" })
    }
    else {
        res.status(400).json({ error: "this method is not allowed" })
    }
}
export default connectDB(handler)