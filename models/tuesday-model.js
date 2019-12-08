const mongoose = require("mongoose");

const tuesdaySchema = new mongoose.Schema({
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
    default: "tuesday"
  }
});

module.exports = mongoose.model("Tuesday", tuesdaySchema);
