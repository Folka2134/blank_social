module.exports = {
  getHomePage: async (req, res) => {
    try {
      res.render("index.ejs");
    } catch (error) {
      console.log(error);
    }
  },
  getLoginPage: async (req, res) => {
    try {
      res.render("login.ejs");
    } catch (error) {
      console.log(error);
    }
  },
  getsignupPage: async (req, res) => {
    try {
      res.render("signup.ejs");
    } catch (error) {
      console.log(error);
    }
  },
};
