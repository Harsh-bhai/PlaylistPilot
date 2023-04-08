import connectDB from "@/middleware/mongoose";
import Spotifyuser from "@/model/Spotifyuser";

const handler = async(req,res)=>{
    if (req.method == 'GET') {
        let p = await Spotifyuser.find({});            
        res.status(200).json({ usercount:p.length,users:p,})
    }

    //  if (req.method == 'POST') {
    //     let p =await Spotifyuser.create(req.body)
    //     await p.save()
    // res.status(200).json({ success:"huge success" })
    // let c=await Spotifyuser.find({userinfo:req.body.userinfo})
    // res.status(200).json({ })
// }
else {
    res.status(400).json({ error: "this method is not allowed" })
}
}
export default connectDB(handler)