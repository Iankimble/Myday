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
  }
});

module.exports = mongoose.model("Wednesday", wednesdaySchema);
