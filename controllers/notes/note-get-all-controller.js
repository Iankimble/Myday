const Sunday = require("../../models/eachDay/sunday-model");
const Monday = require("../../models/eachDay/monday-model");
const Tuesday = require("../../models/eachDay/tuesday-model");
const Wednesday = require("../../models/eachDay/wednesday-model");
const Thursday = require("../../models/eachDay/thursday-model");
const Friday = require("../../models/eachDay/friday-model");
const Saturday = require("../../models/eachDay/saturday-model");

exports.getAllSunday = (req, res) => {
  Sunday.find({ postedBy: req.profile._id })
    .populate("postedBy _id")
    .select("_id note createdOn")
    .sort("_createdOn")
    .exec((err, note) => {
      if (err) {
        return res.status(400).json({
          err: "err"
        });
      }
      res.json(note);
    });
};

exports.getAllMonday = (req, res) => {
  Monday.find({ postedBy: req.profile._id })
    .populate("postedBy _id")
    .select("_id note createdOn")
    .sort("_createdOn")
    .exec((err, note) => {
      if (err) {
        return res.status(400).json({
          err: "err"
        });
      }
      res.json(note);
    });
};

exports.getAllTuesday = (req, res) => {
  Tuesday.find({ postedBy: req.profile._id })
    .populate("postedBy _id")
    .select("_id note createdOn")
    .sort("_createdOn")
    .exec((err, note) => {
      if (err) {
        return res.status(400).json({
          err: "err"
        });
      }
      res.json(note);
    });
};

exports.getAllWednesday = (req, res) => {
  Wednesday.find({ postedBy: req.profile._id })
    .populate("postedBy _id")
    .select("_id note createdOn")
    .sort("_createdOn")
    .exec((err, note) => {
      if (err) {
        return res.status(400).json({
          err: "err"
        });
      }
      res.json(note);
    });
};

exports.getAllThursday = (req, res) => {
  Thursday.find({ postedBy: req.profile._id })
    .populate("postedBy _id")
    .select("_id note createdOn")
    .sort("_createdOn")
    .exec((err, note) => {
      if (err) {
        return res.status(400).json({
          err: "err"
        });
      }
      res.json(note);
    });
};

exports.getAllFriday = (req, res) => {
  Friday.find({ postedBy: req.profile._id })
    .populate("postedBy _id")
    .select("_id note createdOn")
    .sort("_createdOn")
    .exec((err, note) => {
      if (err) {
        return res.status(400).json({
          err: "err"
        });
      }
      res.json(note);
    });
};

exports.getAllSaturday = (req, res) => {
  Saturday.find({ postedBy: req.profile._id })
    .populate("postedBy _id")
    .select("_id note createdOn")
    .sort("_createdOn")
    .exec((err, note) => {
      if (err) {
        return res.status(400).json({
          err: "err"
        });
      }
      res.json(note);
    });
};
