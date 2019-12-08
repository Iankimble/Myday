const mongoose = require("mongoose");

const wednesdaySchema = new mongoose.Schema({
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
    default: "wednesday"
  }
});

module.exports = mongoose.model("Wednesday", wednesdaySchema);
