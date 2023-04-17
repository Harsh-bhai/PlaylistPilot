import connectDB from "@/middleware/mongoose";
import User from "@/model/User";
const handler = async(req,res)=>{
    if (req.method == 'POST') {
          for (let i = 0; i < req.body.length; i++) {
            // console.log(req.body,"req.body")
            let p =await User.findByIdAndUpdate(req.body[i]._id,req.body[i])
            await p.save()
        res.status(200).json({ success:"huge success" ,body:req.body})
            
          }
    }
    else {
        res.status(400).json({ error: "this method is not allowed" })
    }
}
export default connectDB(handler)