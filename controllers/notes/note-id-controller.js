const Sunday = require("../../models/eachDay/sunday-model");
const Monday = require("../../models/eachDay/monday-model");
const Tuesday = require("../../models/eachDay/tuesday-model");
const Wednesday = require("../../models/eachDay/wednesday-model");
const Thursday = require("../../models/eachDay/thursday-model");
const Friday = require("../../models/eachDay/friday-model");
const Saturday = require("../../models/eachDay/saturday-model");
const Archive = require("../../models/Archive-model");

const _fs = require("fs");
const _ = require("lodash");

// ID

exports.sunNoteById = (req, res, next, id) => {
  Sunday.findById(id)
    .populate("postedBy", "_id")
    .populate("notes.postedBy", "_id")
    .populate("postedBy", "_id")
    .select("_id node createdOn ")
    .exec((err, note) => {
      if (err || !note) {
        return res.status(400).json({
          msg: "Cant find prayer. Check allUserPrayer route -Ian"
        });
      }
      req.note = note;
      next();
    });
};

exports.monNoteById = (req, res, next, id) => {
  Monday.findById(id)
    .populate("postedBy", "_id")
    .populate("notes.postedBy", "_id")
    .populate("postedBy", "_id")
    .select("_id node createdOn ")
    .exec((err, note) => {
      if (err || !note) {
        return res.status(400).json({
          msg: "Cant find prayer. Check allUserPrayer route -Ian"
        });
      }
      req.note = note;
      next();
    });
};

exports.tueNoteById = (req, res, next, id) => {
  Tuesday.findById(id)
    .populate("postedBy", "_id")
    .populate("notes.postedBy", "_id")
    .populate("postedBy", "_id")
    .select("_id node createdOn ")
    .exec((err, note) => {
      if (err || !note) {
        return res.status(400).json({
          msg: "Cant find prayer. Check allUserPrayer route -Ian"
        });
      }
      req.note = note;
      next();
    });
};

exports.wedNoteById = (req, res, next, id) => {
  Wednesday.findById(id)
    .populate("postedBy", "_id")
    .populate("notes.postedBy", "_id")
    .populate("postedBy", "_id")
    .select("_id node createdOn ")
    .exec((err, note) => {
      if (err || !note) {
        return res.status(400).json({
          msg: "Cant find prayer. Check allUserPrayer route -Ian"
        });
      }
      req.note = note;
      next();
    });
};

exports.thuNoteById = (req, res, next, id) => {
  Thursday.findById(id)
    .populate("postedBy", "_id")
    .populate("notes.postedBy", "_id")
    .populate("postedBy", "_id")
    .select("_id node createdOn ")
    .exec((err, note) => {
      if (err || !note) {
        return res.status(400).json({
          msg: "Cant find prayer. Check allUserPrayer route -Ian"
        });
      }
      req.note = note;
      next();
    });
};

exports.friNoteById = (req, res, next, id) => {
  Friday.findById(id)
    .populate("postedBy", "_id")
    .populate("notes.postedBy", "_id")
    .populate("postedBy", "_id")
    .select("_id node createdOn ")
    .exec((err, note) => {
      if (err || !note) {
        return res.status(400).json({
          msg: "Cant find prayer. Check allUserPrayer route -Ian"
        });
      }
      req.note = note;
      next();
    });
};

exports.satNoteById = (req, res, next, id) => {
  Saturday.findById(id)
    .populate("postedBy", "_id")
    .populate("notes.postedBy", "_id")
    .populate("postedBy", "_id")
    .select("_id node createdOn ")
    .exec((err, note) => {
      if (err || !note) {
        return res.status(400).json({
          msg: "Cant find prayer. Check allUserPrayer route -Ian"
        });
      }
      req.note = note;
      next();
    });
};
