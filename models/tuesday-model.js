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
  }
});

module.exports = mongoose.model("Tuesday", tuesdaySchema);
