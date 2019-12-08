const Sunday = require("../models/sunday-model");
const Monday = require("../models/monday-model");
const Tuesday = require("../models/tuesday-model");
const Wednesday = require("../models/wednesday-model");
const Thursday = require("../models/thursday-model");
const Friday = require("../models/friday-model");
const Saturday = require("../models/saturday-model");

exports.getAllSunday = (req, res) => {
  Sunday.find((err, notes) => {
    if (err) {
      res.status(400).json({
        msg: "couldnt get notes"
      });
    }
    res.json(notes);
    let count = notes.length;
    console.log(`there are ${count} notes for Sunday`);
  });
};

exports.getAllMonday = (req, res) => {
  Monday.find((err, notes) => {
    if (err) {
      res.status(400).json({
        msg: "couldnt get notes"
      });
    }
    res.json(notes);
    let count = notes.length;
    console.log(`there are ${count} notes for Sunday`);
  });
};

exports.getAllTuesday = (req, res) => {
  Tuesday.find((err, notes) => {
    if (err) {
      res.status(400).json({
        msg: "couldnt get notes"
      });
    }
    res.json(notes);
  });
};

exports.getAllWednesday = (req, res) => {
  Wednesday.find((err, notes) => {
    if (err) {
      res.status(400).json({
        msg: "couldnt get notes"
      });
    }
    res.json(notes);
  });
};

exports.getAllThursday = (req, res) => {
  Thursday.find((err, notes) => {
    if (err) {
      res.status(400).json({
        msg: "couldnt get notes"
      });
    }
    res.json(notes);
  });
};

exports.getAllFriday = (req, res) => {
  Friday.find((err, notes) => {
    if (err) {
      res.status(400).json({
        msg: "couldnt get notes"
      });
    }
    res.json(notes);
  });
};

exports.getAllSaturday = (req, res) => {
  Saturday.find((err, notes) => {
    if (err) {
      res.status(400).json({
        msg: "couldnt get notes"
      });
    }
    res.json(notes);
  });
};
