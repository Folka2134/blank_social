module.exports = {
  getHomePage: async (req, res) => {
    try {
      res.render("index.ejs");
    } catch (error) {
      console.log(error);
    }
  },
};
