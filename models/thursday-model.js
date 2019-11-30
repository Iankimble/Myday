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
  }
});

module.exports = mongoose.model("Thursday", thursdaySchema);
