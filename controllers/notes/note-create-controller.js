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
const formidable = require("formidable");

exports.createNewNoteSunday = (req, res) => {
  // let newNote = new Sunday(req.body);
  // let newArchive = new Archive(newNote);

  // req.profile.hashed_password = undefined;
  // req.profile.salt = undefined;
  // newNote.postedBy = req.profile;
  // newNote.note = req.body.note;

  // newNote.save(err => {
  //   if (err) {
  //     return res.status(400).json({
  //       msg: "Something went wrong -Ian"
  //     });
  //   }
  //   res.json({
  //     msg:
  //       "Note has been successfully added to archive and Sunday collections -Ian"
  //   });
  //   newArchive.save();
  // });

  let form = new formidable.IncomingForm();

  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "Image could not be uploaded"
      });
    }
    let post = new Sunday(fields);

    req.profile.hashed_password = undefined;
    req.profile.salt = undefined;
    post.postedBy = req.profile;

    // if (files.photo) {
    //   post.photo.data = fs.readFileSync(files.photo.path);
    //   post.photo.contentType = files.photo.type;
    // }
    post.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: err
        });
      }
      res.json(result);
    });
  });
};

exports.createNewNoteMonday = (req, res) => {
  let newNote = new Monday(req.body);
  let newArchive = new Archive(newNote);

  req.profile.hashed_password = undefined;
  req.profile.salt = undefined;
  newNote.postedBy = req.profile;

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

exports.createNewNoteTuesday = (req, res) => {
  let newNote = new Tuesday(req.body);
  let newArchive = new Archive(newNote);

  req.profile.hashed_password = undefined;
  req.profile.salt = undefined;
  newNote.postedBy = req.profile;

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

exports.createNewNoteWednesday = (req, res) => {
  let newNote = new Wednesday(req.body);
  let newArchive = new Archive(newNote);

  req.profile.hashed_password = undefined;
  req.profile.salt = undefined;
  newNote.postedBy = req.profile;

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

exports.createNewNoteThursday = (req, res) => {
  let newNote = new Thursday(req.body);
  let newArchive = new Archive(newNote);

  req.profile.hashed_password = undefined;
  req.profile.salt = undefined;
  newNote.postedBy = req.profile;

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

exports.createNewNoteFriday = (req, res) => {
  let newNote = new Friday(req.body);
  let newArchive = new Archive(newNote);

  req.profile.hashed_password = undefined;
  req.profile.salt = undefined;
  newNote.postedBy = req.profile;

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

exports.createNewNoteSaturday = (req, res) => {
  let newNote = new Saturday(req.body);
  let newArchive = new Archive(newNote);

  req.profile.hashed_password = undefined;
  req.profile.salt = undefined;
  newNote.postedBy = req.profile;

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
