const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    country: { type: String },
    display_name: { type: String, default: null },
    email: { type: String},
    explicit_content: {
      type: {
        filter_enabled: { type: Boolean, default: null, default: null },
        filter_locked: { type: Boolean, default: null },
      },
      default: null,
    },
    external_urls: {
      spotify: { type: String },
    },
    followers: {
      type: { href: { type: String, default: null }, total: { type: Number } },
      default: null,
    },
    href: { type: String, default: null },
    id: { type: String, default: null },
    images: [
      {
        url: { type: String, default: null },
        height: { type: Number },
        width: { type: Number },
      },
    ],
    product: { type: String },
    type: { type: String, default: null },
    uri: { type: String, default: null },
    beta: {type : JSON ,default:null}
  },
  { timestamps: true }
);
// mongoose.models={}
export default mongoose.models.User || mongoose.model("User", UserSchema);
