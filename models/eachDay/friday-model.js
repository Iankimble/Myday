const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const fridaySchema = new mongoose.Schema({
  note: {
    type: String
  },
  dayOfWeek: {
    type: String,
    default: "friday"
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

module.exports = mongoose.model("Friday", fridaySchema);
