const mongoose = require("mongoose");

const saturdaySchema = new mongoose.Schema({
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
    default: "saturday"
  }
});

module.exports = mongoose.model("Saturday", saturdaySchema);
