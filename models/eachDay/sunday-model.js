const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const sundaySchema = new mongoose.Schema({
  note: {
    type: String
  },
  dayOfWeek: {
    type: String,
    default: "sunday"
  },
  postedBy: {
    type: ObjectId,
    ref: "User"
  },
  createdOn: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Sunday", sundaySchema);
