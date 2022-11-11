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
};
