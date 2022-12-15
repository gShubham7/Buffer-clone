const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["User", "Admin"],
    },
    fb_id: {
      type: String,
    },
    instagram_id: {
      type: String,
    },
    linkedin_id: {
      type: String,
    },
    facebook_posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "post",
      },
    ],
    instagram_posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "post",
      },
    ],
    linkedin_posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "post",
      },
    ],
  }
  // { collection: "user-data" }
);

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;
