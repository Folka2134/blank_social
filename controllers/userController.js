module.exports = {
  getFeedPage: async (req, res) => {
    try {
      res.render("feed.ejs");
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
      await Todo.create({
        caption: req.body.caption,
        image: req.body.image,
        userId: req.user.id,
      });
      console.log("Todo has been added!");
      res.redirect("/todos");
    } catch (err) {
      console.log(err);
    }
  },
};
