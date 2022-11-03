module.exports = {
  getLoginPage: async (req, res) => {
    try {
      res.render("login.ejs");
    } catch (error) {
      console.log(error);
    }
  },
  getSignupPage: async (req, res) => {
    try {
      res.render("signup.ejs");
    } catch (error) {
      console.log(error);
    }
  },
};
