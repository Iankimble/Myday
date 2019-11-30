const mongoose = require("mongoose");

const SundaySchema = new mongoose.Schema({
  title: {
    type: String
  },
  body: {
    type: String
  }
  // completed: {
  //   type: Boolean
  // }
});

module.exports = mongoose.model("Sunday", SundaySchema);
