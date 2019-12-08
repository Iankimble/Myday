const mongoose = require("mongoose");

const mondaySchema = new mongoose.Schema({
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
    default: "monday"
  }
});

module.exports = mongoose.model("Monday", mondaySchema);
