const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/postModel");

module.exports = {
  getFeedPage: async (req, res) => {
    try {
      const posts = await Post.find({ deleted: false })
        .sort({ createdAt: "desc" })
        .lean();
      res.render("feed.ejs", {
        posts: posts,
        user: req.user,
      });
    } catch (error) {
      console.log(error);
    }
  },
  createPost: async (req, res) => {
    try {
      const result = await cloudinary.uploader.upload(req.file.path);

      await Post.create({
        image: result.secure_url,
        cloudinaryId: result.public_id,
        caption: req.body.caption,
        likes: 0,
        createdBy: req.user.id,
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
        { _id: req.params.id },
        {
          $inc: { likes: 1 },
        }
      );
      res.redirect("/feed");
    } catch (err) {
      console.log(err);
    }
  },
  deletePost: async (req, res) => {
    try {
      let post = await Post.findById({ _id: req.params.id });
      await Post.deleteOne({ _id: req.params.id });
      res.redirect("/feed");
    } catch (err) {
      console.log(err);
    }
  },
};
