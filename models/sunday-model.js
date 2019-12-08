const mongoose = require("mongoose");

const sundaySchema = new mongoose.Schema({
  title: {
    type: String
  },
  body: {
    type: String
  },
  completed: {
    type: Boolean
  },
  date: {
    type: String
  },
  dayOfWeek: {
    type: String,
    default: "sunday"
  }
});

module.exports = mongoose.model("Sunday", sundaySchema);
