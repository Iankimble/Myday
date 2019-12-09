const Sunday = require("../models/sunday-model");
const Monday = require("../models/monday-model");
const Tuesday = require("../models/tuesday-model");
const Wednesday = require("../models/wednesday-model");
const Thursday = require("../models/thursday-model");
const Friday = require("../models/friday-model");
const Saturday = require("../models/saturday-model");
const Archive = require("../models/Archive-model");

const _fs = require("fs");
const _ = require("lodash");

exports.noteById = (req, res, next, id) => {
  Note.findById(id).populate("postedBy", "_id name");
};

// Logic to create a new note
exports.createNewNoteSunday = (req, res) => {
  let newNote = new Sunday(req.body);
  let newArchive = new Archive(newNote);

  newNote.save(err => {
    if (err) {
      return res.status(400).json({
        msg: "Something went wrong -Ian"
      });
    }
    res.json({
      msg:
        "Note has been successfully added to archive and Sunday collections -Ian"
    });
    newArchive.save();
  });
};

exports.createNewNoteMonday = (req, res) => {
  let newNote = new Monday(req.body);
  let newArchive = new Archive(newNote);
  newNote.save(err => {
    if (err) {
      return res.status(400).json({
        msg: "Something went wrong -Ian"
      });
    }
    res.json({
      msg:
        "Note has been successfully added to archive and Monday collections -Ian"
    });
    newArchive.save();
  });
};

exports.createNewNoteTuesday = (req, res) => {
  let newNote = new Tuesday(req.body);
  let newArchive = new Archive(newNote);
  newNote.save(err => {
    if (err) {
      return res.status(400).json({
        msg: "Something went wrong -Ian"
      });
    }
    res.json({
      msg:
        "Note has been successfully added to archive and Tuesday collections -Ian"
    });
    newArchive.save();
  });
};

exports.createNewNoteWednesday = (req, res) => {
  let newNote = new Wednesday(req.body);
  let newArchive = new Archive(newNote);
  newNote.save(err => {
    if (err) {
      return res.status(400).json({
        msg: "Something went wrong -Ian"
      });
    }
    res.json({
      msg:
        "Note has been successfully added to archive and Wednesday collections -Ian"
    });
  });
  newArchive.save();
};

exports.createNewNoteThursday = (req, res) => {
  let newNote = new Thursday(req.body);
  let newArchive = new Archive(newNote);
  newNote.save(err => {
    if (err) {
      return res.status(400).json({
        msg: "Something went wrong -Ian"
      });
    }
    res.json({
      msg:
        "note has been successfully added to archive and Thursday collections -Ian"
    });
  });
  newArchive.save();
};

exports.createNewNoteFriday = (req, res) => {
  let newNote = new Friday(req.body);
  let newArchive = new Archive(newNote);
  newNote.save(err => {
    if (err) {
      return res.status(400).json({
        msg: "Something went wrong -Ian"
      });
    }
    res.json({
      msg:
        "note has been successfully added to archive and Friday collections -Ian"
    });
  });
  newArchive.save();
};

exports.createNewNoteSaturday = (req, res) => {
  let newNote = new Saturday(req.body);
  let newArchive = new Archive(newNote);
  newNote.save(err => {
    if (err) {
      return res.status(400).json({
        msg: "Something went wrong -Ian"
      });
    }
    res.json({
      msg:
        "note has been successfully added to archive and Saturday collections -Ian"
    });
  });
  newArchive.save();
};
