const mongoose = require("mongoose");

const thursdaySchema = new mongoose.Schema({
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
    default: "thursday"
  }
});

module.exports = mongoose.model("Thursday", thursdaySchema);
