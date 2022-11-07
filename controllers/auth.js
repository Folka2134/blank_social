const validator = require("validator");
const User = require("../models/userModel");

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
  postSignup: async (req, res) => {
    console.log(req.body.confirmPassword);
    const validationErrors = [];
    if (!validator.isEmail(req.body.email))
      validationErrors.push({ msg: "Please enter a valid email address." });
    if (!validator.isLength(req.body.password, { min: 8 }))
      validationErrors.push({
        msg: "Password must be at least 8 characters long",
      });
    if (req.body.password !== req.body.confirmPassword)
      validationErrors.push({ msg: "Passwords do not match" });

    if (validationErrors.length) {
      console.log(validationErrors);
      // req.flash("errors", validationErrors);
      return res.redirect("../signup");
    }
    req.body.email = validator.normalizeEmail(req.body.email, {
      gmail_remove_dots: false,
    });

    const user = new User({
      userName: req.body.userName,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    });

    User.findOne(
      { $or: [{ email: req.body.email }, { userName: req.body.userName }] },
      (err, existingUser) => {
        if (err) {
          return next(err);
        }
        if (existingUser) {
          // req.flash("errors", {
          //   msg: "Account with that email address or username already exists.",
          // });
          console.log(
            "Account with that email address or username already exists."
          );
          return res.redirect("../signup");
        }
        user.save((err) => {
          if (err) {
            return next(err);
          }
          res.redirect("/feed");
          // req.logIn(user, (err) => {
          //   if (err) {
          //     return next(err);
          //   }
          //   res.redirect("/todos");
          // });
        });
      }
    );
  },
};
