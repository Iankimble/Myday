const jwt = require("jsonwebtoken");
require("dotenv").config();
const expressJwt = require("express-jwt");
const _ = require("lodash");

const User = require("../../models/User-model");

exports.signup = async (req, res) => {
  const userExists = await User.findOne({ email: req.body.email });
  if (userExists)
    return res.status(403).json({
      error: "Email already exists -Ian"
    });
  const user = await new User(req.body);
  await user.save();
  res.status(200).json({ msg: "Thank you for signing up! please login -Ian" });
};

exports.signin = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(401).json({
        error:
          "This email is either not in DB collection or something went wrong -Ian"
      });
    }
    if (!user.authenticate(password)) {
      return res.status(401).json({
        error: "email does not match the password string -Ian"
      });
    }
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

    res.cookie("tkn", token, { expire: new Date() + 9999 });
    const { _id, firstName, lastName, email } = user;
    return res.json({ token, user: { _id, email, firstName, lastName } });
  });
};

exports.signout = (req, res) => {
  res.clearCookie("tkn");
  return res.json({ msg: "user successfully signed out -Ian" });
};

exports.requireSignin = expressJwt({
  secret: process.env.JWT_SECRET,
  userProperty: "auth"
});
