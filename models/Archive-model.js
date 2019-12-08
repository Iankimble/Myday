const mongoose = require("mongoose");

const ArchiveSchema = new mongoose.Schema({
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
    type: String
  },
  dateOfWeek: {
    type: String
  }
});

module.exports = mongoose.model("Archive", ArchiveSchema);

// "dayOfWeek" is included in each week day model
// "dateOfWeek" will be pulled from front end/ moment.js logic
