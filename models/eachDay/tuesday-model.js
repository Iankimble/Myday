const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const tuesdaySchema = new mongoose.Schema({
  note: {
    type: String
  },
  dayOfWeek: {
    type: String,
    default: "tuesday"
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

module.exports = mongoose.model("Tuesday", tuesdaySchema);
