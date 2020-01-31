const Archive = require("../../models/Archive-model");

exports.getAllArchive = (req, res, next) => {
  Archive.find((err, archives) => {
    if (err) {
      res.status(400).json({
        msg: "something went wrong with getting archived notes. -Ian",
        err: err
      });
    }
    res.json(archives);
  });
};

// All Archives by day

exports.getAllSunArchive = () => {
  let a = Archive.find({ _id: "sunday" });
  console.log(a);
};

exports.getAllMonArchive = (req, res, next) => {
  let monA = req.params.monday;
  Archive.find(monA, (err, data) => {
    if (err) {
      return res.status(400).json({
        msg: "cant find baby"
      });
    }
    res.json(data);
    console.log(data);
  });
};

exports.getAllTueArchive = (req, res, next) => {
  let sunArchived = req.params.dayOfWeek;
  if (err) {
    return res.status(400).json({
      msg: "Something went wrong function. review code again. -Ian"
    });
  }
  res.json(sunArchived);
};

exports.getAllWedArchive = (req, res, next) => {
  let sunArchived = req.params.dayOfWeek;
  if (err) {
    return res.status(400).json({
      msg: "Something went wrong function. review code again. -Ian"
    });
  }
  res.json(sunArchived);
};

exports.getAllThuArchive = (req, res, next) => {
  let sunArchived = req.params.dayOfWeek;
  if (err) {
    return res.status(400).json({
      msg: "Something went wrong function. review code again. -Ian"
    });
  }
  res.json(sunArchived);
};

exports.getAllFriArchive = (req, res, next) => {
  let sunArchived = req.params.dayOfWeek;
  if (err) {
    return res.status(400).json({
      msg: "Something went wrong function. review code again. -Ian"
    });
  }
  res.json(sunArchived);
};

exports.getAllSatArchive = (req, res, next) => {
  let sunArchived = req.params.dayOfWeek;
  if (err) {
    return res.status(400).json({
      msg: "Something went wrong function. review code again. -Ian"
    });
  }
  res.json(sunArchived);
};
