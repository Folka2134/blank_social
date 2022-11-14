const Post = require("../models/postModel");

module.exports = {
  getFeedPage: async (req, res) => {
    try {
      const postItems = await Post.find();
      console.log(postItems);
      res.render("feed.ejs", {
        posts: postItems,
        user: req.user,
      });
    } catch (error) {
      console.log(error);
    }
  },
  getCreatePost: async (req, res) => {
    try {
      res.render("createPost.ejs");
    } catch (error) {
      console.log(error);
    }
  },
  createPost: async (req, res) => {
    try {
      await Post.create({
        image: req.body.image,
        caption: req.body.caption,
        userId: req.user.id,
      });
      console.log("Post has been added!");
      res.redirect("/feed");
    } catch (err) {
      console.log(err);
    }
  },
};
