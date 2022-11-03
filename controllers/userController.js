module.exports = {
  getFeedPage: async (req, res) => {
    try {
      res.render("feed.ejs");
    } catch (error) {
      console.log(error);
    }
  },
};
