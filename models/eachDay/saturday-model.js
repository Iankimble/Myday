const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const saturdaySchema = new mongoose.Schema({
  note: {
    type: String
  },
  dayOfWeek: {
    type: String,
    default: "saturday"
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

module.exports = mongoose.model("Saturday", saturdaySchema);
