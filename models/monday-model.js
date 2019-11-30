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
  }
});

module.exports = mongoose.model("Monday", mondaySchema);
