import User from "@/model/User";
import connectDB from "@/middleware/mongoose";

const handler = async (req, res) => {
  if (req.method == "POST") {
    console.log(req.body);
    for (let i = 0; i < req.body.length; i++) {
      let p = new User({
        country: req.body[i].country,
        display_name: req.body[i].display_name,
        email: req.body[i].email,
        explicit_content: {
          filter_enabled: req.body[i].explicit_content && req.body[i].explicit_content.filter_enabled,
          filter_locked:req.body[i].explicit_content && req.body[i].explicit_content.filter_locked,
        },
        external_urls: {
          spotify: req.body[i].external_urls.spotify,
        },
        followers: {
          href:req.body[i].followers.href && req.body[i].followers.href.toString(), // ensure href is always a string
          total: req.body[i].followers.total,
        },
        href: req.body[i].href,
        id: req.body[i].id,
        images: [
          {
            url: req.body[i].images[0].url,
            height: req.body[i].images[0].height,
            width: req.body[i].images[0].width,
          },
        ],
        product: req.body[i].product,
        type: req.body[i].type,
        uri: req.body[i].uri,
      });
      await p.save();
    }
    res.status(200).json({ success: true });
  } else {
    res.status(400).json({ error: "Bad request" });
  }
};

export default connectDB(handler);

// import User from "@/model/User";
// import connectDB from "@/middleware/mongoose";

// const handler = async (req, res) => {
//   if (req.method == "POST") {
//     try {
//       const users = req.body;
//       const createdUsers = await User.create(users);
//       res.status(200).json({ success: true, data: createdUsers });
//     } catch (error) {
//       res.status(400).json({ success: false, error: error.message });
//     }
//   } else {
//     res.status(400).json({ success: false, error: "Bad request 100" });
//   }
// };

// export default connectDB(handler);