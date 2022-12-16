const jwt = require("jsonwebtoken");
const UserModel = require("../models/user.model");
const PostModel = require("../models/post.model");

const data = async (req, res) => {
  const { token } = req.body;
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await UserModel.findById(decoded._id);
    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }
    return res
      .status(200)
      .send({ id: user._id, name: user.name, email: user.email });
  } catch (err) {
    return res.status(401).send({ error: "Invalid token" });
  }
};

//profile of the particular user......................
const profile = async (req, res) => {
  const token = req.headers.authorization;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await UserModel.findById(decoded._id);
    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }
    const posts = await PostModel.find({ author_id: user._id });
    // const likedPosts = await PostModel.find({ likes: decoded._id });
    return res.status(200).send({
      id: user._id,
      name: user.name,
      email: user.email,
      posts: posts,
      // likedPosts: likedPosts,
    });
  } catch (err) {
    return res.status(401).send({ error: "Invalid token" });
  }
};

//all posts displayed........
const posts = async (req, res) => {
  const { token } = req.headers.authorization;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await UserModel.findById(decoded._id);
    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }
    const posts = await PostModel.find({ author_id: user._id });
    return res.status(200).send(posts);
  } catch (err) {
    return res.status(401).send({ error: "Invalid token" });
  }
};

//search post............
const serachQuery = async (req, res) => {
  const { query } = req.params;
  const posts = await PostModel.find({
    title: { $regex: query, $options: "i" },
  });
  return res.status(200).send({ posts: posts });
};

//particular post is displayed here when user clicks on that post...........
const postID = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await PostModel.findById(id);
    if (!post) {
      return res.status(404).send({ error: "Post not found" });
    }
    return res.status(200).send({ post: post });
  } catch (err) {
    return res.status(404).send({ error: "Post not found" });
  }
};

//liked the particular post...............
const post_likeID = async (req, res) => {
  const { id } = req.params;
  const { user_id } = req.body;
  const post = await PostModel.findById(id);
  if (!post) {
    return res.status(404).send({ error: "Post not found" });
  }
  post.likes.push(user_id);
  await post.save();
  return res.status(200).send({ post: post });
};

//unliked the particular post...............
const post_UnlikeId = async (req, res) => {
  const { id } = req.params;
  const { user_id } = req.body;
  const post = await PostModel.findById(id);
  if (!post) {
    return res.status(404).send({ error: "Post not found" });
  }
  const index = post.likes.indexOf(user_id);
  post.likes.splice(index, 1);
  await post.save();
  return res.status(200).send({ post: post });
};

//commented on the particular post...............
const post_CommentId = async (req, res) => {
  const { id } = req.params;
  const { user_id, comment } = req.body;
  const post = await PostModel.findById(id);
  if (!post) {
    return res.status(404).send({ error: "Post not found" });
  }
  const user = await UserModel.findById(user_id);
  post.comments.push({
    name: user.name,
    comment: comment,
    date: new Date(),
  });
  await post.save();
  return res.status(200).send({ post: post });
};

//create the post...........................
const createPost = async (req, res) => {
  const { title, start, end, channels } = req.body;
  // console.log(channels);
  const token = req.headers.authorization;
  console.log(token);
  const { facebook_posts, instagram_posts, linkedin_posts } = channels;

  if (req.file) {
    cloudinary.uploader.upload(
      req.file.path,
      { folder: "ecotone" },
      async (err, result) => {
        if (err) {
          return res.status(500).json({
            error: "Internal server error",
          });
        }
        const image = result.secure_url;
        const cloudinaryId = result.public_id;
        try {
          const decoded = jwt.verify(token, process.env.JWT_SECRET);
          const user = await UserModel.findById(decoded._id);
          if (!user) {
            return res.status(404).send({ error: "User not found" });
          }
          const post = new PostModel({
            title,
            content,
            image,
            cloudinaryId,
            author: user.name,
            author_id: user._id,
            created_at: date,
          });
          await post.save();
          user.fb_posts.push(blog._id);
          await user.save();
          return res.status(200).send({
            message: "Blog created successfully",
          });
        } catch (err) {
          return res.status(401).send({ error: "Invalid token" });
        }
      }
    );
  } else {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await UserModel.findById(decoded._id);

      if (!user) {
        return res.status(404).send({ error: "User not found" });
      }
      const post = new PostModel({
        title,
        start,
        end,
        author: user.name,
        author_id: user._id,
        created_at: new Date(),
      });
      await post.save();

      // const entries = Object.entries(channels);
      // const values = Object.values(channels);

      // for (let i = 0; i < entries.length; i++) {
      //   if (values[i]) {
      //     user.entries[i].push(post._id);
      //   }
      // }

      if (facebook_posts && instagram_posts && linkedin_posts) {
        user.facebook_posts.push(post._id);
        user.instagram_posts.push(post._id);
        user.linkedin_posts.push(post._id);
      } else if (facebook_posts && instagram_posts) {
        user.facebook_posts.push(post._id);
        user.instagram_posts.push(post._id);
      } else if (facebook_posts && linkedin_posts) {
        user.facebook_posts.push(post._id);
        user.linkedin_posts.push(post._id);
      } else if (instagram_posts && linkedin_posts) {
        user.instagram_posts.push(post._id);
        user.linkedin_posts.push(post._id);
      } else if (facebook_posts) {
        user.facebook_posts.push(post._id);
      } else if (instagram_posts) {
        user.instagram_posts.push(post._id);
      } else if (linkedin_posts) {
        user.linkedin_posts.push(post._id);
      }

      await user.save();
      return res.status(200).send({
        message: "Post created successfully",
      });
    } catch (err) {
      return res.status(401).send({ error: "Invalid token" });
    }
  }
};

//edit the post..........................
const editPost = async (req, res) => {
  const { title, content, date, id, token, image } = req.body;
  if (req.file) {
    const post = await PostModel.findById(id);
    if (!post) {
      return res.status(404).send({ error: "Post not found" });
    }
    if (post.image) {
      cloudinary.uploader.destroy(post.cloudinaryId, async (err, result) => {
        if (err) {
          return res.status(500).json({
            error: "Internal server error",
          });
        }
      });
    }
    cloudinary.uploader.upload(
      req.file.path,
      { folder: "ecotone" },
      async (err, result) => {
        if (err) {
          return res.status(500).json({
            error: "Internal server error",
          });
        }
        const image = result.secure_url;
        const cloudinaryId = result.public_id;
        try {
          const decoded = jwt.verify(token, process.env.JWT_SECRET);
          const user = await UserModel.findById(decoded._id);
          if (!user) {
            return res.status(404).send({ error: "User not found" });
          }
          const post = await PostModel.findById(id);
          if (!post) {
            return res.status(404).send({ error: "Post not found" });
          }
          if (post.author_id.toString() !== user._id.toString()) {
            return res.status(401).send({ error: "Unauthorized" });
          }
          post.title = title;
          post.content = content;
          post.image = image;
          post.cloudinaryId = cloudinaryId;
          post.created_at = date;
          await post.save();
          return res.status(200).send({
            message: "Post updated successfully",
          });
        } catch (err) {
          return res.status(401).send({ error: "Invalid token" });
        }
      }
    );
  } else {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await UserModel.findById(decoded._id);
      if (!user) {
        return res.status(404).send({ error: "User not found" });
      }
      const post = await PostModel.findById(id);
      if (!post) {
        return res.status(404).send({ error: "Post not found" });
      }
      if (post.author_id.toString() !== user._id.toString()) {
        return res.status(401).send({ error: "Unauthorized" });
      }
      if (post.image && image === "null") {
        cloudinary.uploader.destroy(post.cloudinaryId, async (err, result) => {
          if (err) {
            return res.status(500).json({
              error: "Internal server error",
            });
          }
        });
        post.image = null;
        post.cloudinaryId = null;
      }
      post.title = title;
      post.content = content;
      post.created_at = date;
      await post.save();
      return res.status(200).send({
        message: "Post updated successfully",
      });
    } catch (err) {
      return res.status(401).send({ error: "Invalid token" });
    }
  }
};

//delete the post...................
const deletePost = async (req, res) => {
  const { id, token } = req.body;
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await UserModel.findById(decoded._id);
    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }
    const post = await PostModel.findById(id);
    if (!post) {
      return res.status(404).send({ error: "Post not found" });
    }
    const index = user.fb_posts.indexOf(id);
    user.fb_posts.splice(index, 1);
    await user.save();
    if (post.cloudinaryId) {
      cloudinary.uploader.destroy(post.cloudinaryId, (err, result) => {
        if (err) {
          return res.status(500).json({
            error: "Internal server error",
          });
        }
      });
    }
    await post.remove();
    const posts = await PostModel.find({ author_id: user._id });
    const likedPosts = await PostModel.find({ likes: decoded._id });
    return res.status(200).send({
      posts: posts,
      likedPosts: likedPosts,
    });
  } catch (err) {
    return res.status(401).send({ error: "Invalid token" });
  }
};

module.exports = {
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
};
