const Post = require("../models/postModel");

module.exports = {
  getFeedPage: async (req, res) => {
    try {
      const postItems = await Post.find();
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
        likes: 0,
        createdBy: req.user.id,
        createdAt: new Date(),
        deleted: false,
      });
      console.log("Post has been added!");
      res.redirect("/feed");
    } catch (err) {
      console.log(err);
    }
  },
  addLike: async (req, res) => {
    try {
      await Post.findOneAndUpdate(
        {
          createdBy: req.body.createdBy,
          caption: req.body.caption,
          likes: req.body.likes,
        },
        {
          $set: {
            likes: req.body.likes + 1,
          },
        }
      );

      res.redirect("/feed");
    } catch (err) {
      console.log(err);
    }
  },
};
