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

exports.deleteSunday = (req, res) => {
  let note = req.note;
  note.remove((err, note) => {
    if (err) {
      return res.status(400).json({
        error: err
      });
    }
    res.json({
      message: "note removed successfully"
    });
  });
};

exports.deleteMonday = (req, res) => {
  let note = req.note;
  note.remove((err, note) => {
    if (err) {
      return res.status(400).json({
        error: err
      });
    }
    res.json({
      message: "Prayer removed successfully"
    });
  });
};

exports.deleteTuesday = (req, res) => {
  let note = req.note;
  note.remove((err, note) => {
    if (err) {
      return res.status(400).json({
        error: err
      });
    }
    res.json({
      message: "Prayer removed successfully"
    });
  });
};

exports.deleteWednesday = (req, res) => {
  let note = req.note;
  note.remove((err, note) => {
    if (err) {
      return res.status(400).json({
        error: err
      });
    }
    res.json({
      message: "Prayer removed successfully"
    });
  });
};

exports.deleteThursday = (req, res) => {
  let note = req.note;
  note.remove((err, note) => {
    if (err) {
      return res.status(400).json({
        error: err
      });
    }
    res.json({
      message: "Prayer removed successfully"
    });
  });
};

exports.deleteFriday = (req, res) => {
  let note = req.note;
  note.remove((err, note) => {
    if (err) {
      return res.status(400).json({
        error: err
      });
    }
    res.json({
      message: "Prayer removed successfully"
    });
  });
};

exports.deleteSaturday = (req, res) => {
  let note = req.note;
  note.remove((err, note) => {
    if (err) {
      return res.status(400).json({
        error: err
      });
    }
    res.json({
      message: "Prayer removed successfully"
    });
  });
};
