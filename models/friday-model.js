const mongoose = require("mongoose");

const fridaySchema = new mongoose.Schema({
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

module.exports = mongoose.model("Friday", fridaySchema);
