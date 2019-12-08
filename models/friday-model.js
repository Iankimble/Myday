const mongoose = require("mongoose");

const fridaySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
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
    default: "friday"
  }
});

module.exports = mongoose.model("Friday", fridaySchema);
