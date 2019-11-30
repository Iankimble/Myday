const Sunday = require("../models/sunday-model");
const Monday = require("../models/monday-model");
const Tuesday = require("../models/tuesday-model");
const Wednesday = require("../models/wednesday-model");
const Thursday = require("../models/thursday-model");
const Friday = require("../models/friday-model");
const Saturday = require("../models/saturday-model");

// Logic to create a new note
exports.createNewNoteSunday = (req, res) => {
  let newNote = new Sunday(req.body);
  newNote.save(err => {
    if (err) {
      return res.status(400).json({
        msg: "note was not entered"
      });
    }
    res.json({ msg: "note has been added successfully" });
  });
};

exports.createNewNoteMonday = (req, res) => {
  let newNote = new Monday(req.body);
  newNote.save(err => {
    if (err) {
      return res.status(400).json({
        msg: "note was not entered"
      });
    }
    res.json({ msg: "note has been added successfully" });
  });
};

exports.createNewNoteTuesday = (req, res) => {
  let newNote = new Tuesday(req.body);
  newNote.save(err => {
    if (err) {
      return res.status(400).json({
        msg: "note was not entered"
      });
    }
    res.json({ msg: "note has been added successfully" });
  });
};

exports.createNewNoteWednesday = (req, res) => {
  let newNote = new Wednesday(req.body);
  newNote.save(err => {
    if (err) {
      return res.status(400).json({
        msg: "note was not entered"
      });
    }
    res.json({ msg: "note has been added successfully" });
  });
};

exports.createNewNoteThursday = (req, res) => {
  let newNote = new Thursday(req.body);
  newNote.save(err => {
    if (err) {
      return res.status(400).json({
        msg: "note was not entered"
      });
    }
    res.json({ msg: "note has been added successfully" });
  });
};

exports.createNewNoteFriday = (req, res) => {
  let newNote = new Friday(req.body);
  newNote.save(err => {
    if (err) {
      return res.status(400).json({
        msg: "note was not entered"
      });
    }
    res.json({ msg: "note has been added successfully" });
  });
};

exports.createNewNoteSaturday = (req, res) => {
  let newNote = new Saturday(req.body);
  newNote.save(err => {
    if (err) {
      return res.status(400).json({
        msg: "note was not entered"
      });
    }
    res.json({ msg: "note has been added successfully" });
  });
};
