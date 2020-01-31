const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const wednesdaySchema = new mongoose.Schema({
  note: {
    type: String
  },
  dayOfWeek: {
    type: String,
    default: "wednesday"
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

module.exports = mongoose.model("Wednesday", wednesdaySchema);
