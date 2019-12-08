const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const moment = require("moment");

const dotenv = require("dotenv");
dotenv.config();

const app = express();

// logic purposed for frontend. will be used for the
// day models to catagorize the days

let sun = moment()
  .startOf("week")
  .format("dddd, MMMM Do YYYY");

let mon = moment()
  .startOf("week")
  .add(1, "d")
  .format("dddd, MMMM Do YYYY");

let tue = moment()
  .startOf("week")
  .add(2, "d")
  .format("dddd, MMMM Do YYYY");

let wed = moment()
  .startOf("week")
  .add("3", "d")
  .format("dddd, MMMM Do YYYY");

let thur = moment()
  .startOf("week")
  .add("4", "d")
  .format("dddd, MMMM Do YYYY");

let fri = moment()
  .startOf("week")
  .add("5", "d")
  .format("dddd, MMMM Do YYYY");

let sat = moment()
  .endOf("week")
  .format("dddd, MMMM Do YYYY");

console.log("Current Week");
console.log(sun);
console.log(mon);
console.log(tue);
console.log(wed);
console.log(thur);
console.log(fri);
console.log(sat);

//Routes
// const authRoutes = require("./routes/auth-routes");
// const userRoutes = require("./routes/user-routes");
const noteRoutes = require("./routes/note-routes");

//Middleware/ Checkware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors());
app.use("/", noteRoutes);
// userRoutes, authRoutes

// // MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("DB connected"))
  .catch(err => {
    console.log("DB connection error");
    process.exit();
  });

//Port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`app is on ${port}`);
});
