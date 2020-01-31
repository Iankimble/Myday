const _ = require("lodash");
const User = require("../../models/User-model");
const fs = require("fs");
const formidable = require("formidable");

exports.userById = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err) {
      return res.status(400).json({
        error: "User was either not found or there was another issue - Ian"
      });
    }
    req.profile = user;
    next();
  });
};

exports.hasBeenAuthorized = (req, res, next) => {
  const authorized =
    req.profile && req.auth && req.profile._id === req.auth._id;
  if (!authorized) {
    return res.status(403).json({
      error: "User is not authorized. -Ian"
    });
  }
  next();
};

exports.getUser = (req, res) => {
  req.profile.hashed_password = undefined;
  req.profile.salt = undefined;
  return res.json(req.profile);
};

exports.deleteUser = (req, res, next) => {
  let user = req.profile;
  user.remove((err, user) => {
    if (err) {
      return res.status(400).json({
        msg: "something went wrong with deleting user account -Ian",
        error: err
      });
    }
    next();
  });
};
