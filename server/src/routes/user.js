const express = require("express");
const Router = express.Router();
const upload = require("../middlewares/imageUploader");
const {
  data,
  profile,
  posts,
  serachQuery,
  postID,
  post_likeID,
  post_UnlikeId,
  post_CommentId,
  createPost,
  editPost,
  deletePost,
} = require("../controllers/user.controller");

Router.post("/data", data);

//profile of the particular user......................
Router.post("/profile", profile);

//all posts displayed........
Router.get("/posts", posts);

//search post............
Router.get("/search/:query", serachQuery);

//particular bolg is displayed here when user clicks on that post...........
Router.get("/post/:id", postID);

//liked the particular post...............
Router.post("/post/like/:id", post_likeID);

//unliked the particular post...............
Router.post("/post/unlike/:id", post_UnlikeId);

//commented on the particular post...............
Router.post("/post/comment/:id", post_CommentId);

//create post...........................
Router.post("/create", upload.single("image"), createPost);

//edit the post..........................
Router.post("/edit", upload.single("image"), editPost);

//delete the post...................
Router.post("/delete", upload.single("image"), deletePost);

module.exports = Router;
