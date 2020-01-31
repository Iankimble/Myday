const express = require("express");

// note id
const {
  sunNoteById,
  monNoteById,
  tueNoteById,
  wedNoteById,
  thuNoteById,
  friNoteById,
  satNoteById
} = require("../controllers/notes/note-id-controller");

// create a  note
const {
  createNewNoteSunday,
  createNewNoteMonday,
  createNewNoteTuesday,
  createNewNoteWednesday,
  createNewNoteThursday,
  createNewNoteFriday,
  createNewNoteSaturday
} = require("../controllers/notes/note-create-controller");

// get all notes for day of week
const {
  getAllSunday,
  getAllMonday,
  getAllTuesday,
  getAllWednesday,
  getAllThursday,
  getAllFriday,
  getAllSaturday
} = require("../controllers/notes/note-get-all-controller");

// delete a note
const {
  deleteSunday,
  deleteMonday,
  deleteTuesday,
  deleteWednesday,
  deleteThursday,
  deleteFriday,
  deleteSaturday
} = require("../controllers/notes/note-delete-note-controller");

// get archived notes
// const {
//   getAllArchive,
//   getAllSunArchive,
//   getAllMonArchive
// } = require("../controllers/archive-controller");

// const { getAllWeek, createNeW, removePost } = require("../controllers/");

const { requireSignin } = require("../controllers/auth/auth-controller");

const { userById } = require("../controllers/user/user-crud-controller");

const router = express.Router();

//SUNDAY CRUD
// Route to GET all Sunday notes
router.get("/sunday/all/:userId", requireSignin, getAllSunday);
// Route to POST new Sunday note
router.post("/sunday/new/:userId", requireSignin, createNewNoteSunday);
// Route to Delete Sunday note by ID
router.delete("/sunday/delete/:sunNoteId", requireSignin, deleteSunday);

//MONDAY CRUD
// Route to GET all Monday notes
router.get("/monday/all/:userId", requireSignin, getAllMonday);
// Route to POST new Monday note
router.post("/monday/new/:userId", requireSignin, createNewNoteMonday);
// Route to Delete Monday note by ID
router.delete("/monday/delete/:monNoteId", requireSignin, deleteMonday);

//TUESDAY CRUD
// Route to GET all Tuesday notes
router.get("/tuesday/all/:userId", requireSignin, getAllTuesday);
// Route to POST new Tuesday note
router.post("/tuesday/new/:userId", requireSignin, createNewNoteTuesday);
// Route to Delete Tuesday note by ID
router.delete("/tuesday/delete/:tueNoteId", requireSignin, deleteTuesday);

//WEDNESDAY CRUD
// Route to GET all Wednesday notes
router.get("/wednesday/all/:userId", requireSignin, getAllWednesday);
// Route to POST new Wednesday note
router.post("/wednesday/new/:userId", requireSignin, createNewNoteWednesday);
// Route to PUT/edit new Wednesday note by ID
router.delete("/wednesday/delete/:wedNoteId", requireSignin, deleteWednesday);

//THURSDAY CRUD
// Route to GET all Thursday notes
router.get("/thursday/all/:userId", requireSignin, getAllThursday);
// Route to POST new Thursday note
router.post("/thursday/new/:userId", requireSignin, createNewNoteThursday);
// Route to Delete Thursday note by ID
router.delete("/thursday/delete/:thuNoteId", requireSignin, deleteThursday);

//FRIDAY CRUD
// Route to GET all Friday notes
router.get("/friday/all/:userId", requireSignin, getAllFriday);
// Route to POST new Friday note
router.post("/friday/new/:userId", requireSignin, createNewNoteFriday);
// Route to Delete Friday note by ID
router.delete("/friday/delete/:friNoteId", requireSignin, deleteFriday);

// SATURDAY CRUD
// Route to GET all Saturday notes
router.get("/saturday/all/:userId", requireSignin, getAllSaturday);
// Route to POST new Saturday note
router.post("/saturday/new/:userId", requireSignin, createNewNoteSaturday);
// Route to Delete Saturday note by ID
router.delete("/saturday/delete/:satNoteId", requireSignin, deleteSaturday);

// ARCHIVE CRUD
// View all notes in archive
// router.get("/archive/all", getAllArchive);
// Get all archived for notes assigned to sunday day
// router.get("/archive/sunday", getAllSunArchive);
// router.get("/archive/:dayofweek", getAllMonArchive);

router.param("userId", userById);

router.param("sunNoteId", sunNoteById);
router.param("monNoteId", monNoteById);
router.param("tueNoteId", tueNoteById);
router.param("wedNoteId", wedNoteById);
router.param("thuNoteId", thuNoteById);
router.param("friNoteId", friNoteById);
router.param("satNoteId", satNoteById);

module.exports = router;
