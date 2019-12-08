const express = require("express");

const {
  createNewNoteSunday,
  createNewNoteMonday,
  createNewNoteTuesday,
  createNewNoteWednesday,
  createNewNoteThursday,
  createNewNoteFriday,
  createNewNoteSaturday
} = require("../controllers/note-create-controller");

const {
  getAllSunday,
  getAllMonday,
  getAllTuesday,
  getAllWednesday,
  getAllThursday,
  getAllFriday,
  getAllSaturday
} = require("../controllers/note-get-all-controller");

const {
  getAllArchive,
  getAllSunArchive,
  getAllMonArchive
} = require("../controllers/archive-controller");

// const {} = require("../controllers/");

// const {} = require("../controllers/");

const router = express.Router();

//SUNDAY CRUD
// Route to GET all Sunday notes
router.get("/sunday/all", getAllSunday);
//Route to GET single note
router.get("/sunday/note/:id");
// Route to POST new Sunday note
router.post("/sunday/new", createNewNoteSunday);
// Route to PUT/edit new Sunday note by ID
router.put("/sunday/edit/:id");
// Route to Delete Sunday note by ID
router.delete("/sunday/delete/:id");

//MONDAY CRUD
// Route to GET all Monday notes
router.get("/monday/all", getAllMonday);
//Route to GET single note
router.get("/monday/note/:id");
// Route to POST new Monday note
router.post("/monday/new", createNewNoteMonday);
// Route to PUT/edit new Monday note by ID
router.put("/monday/edit/:id");
// Route to Delete Monday note by ID
router.delete("/monday/delete/:id");

//TUESDAY CRUD
// Route to GET all Tuesday notes
router.get("/tuesday/all", getAllTuesday);
//Route to GET single note
router.get("/tuesday/note/:id");
// Route to POST new Tuesday note
router.post("/tuesday/new", createNewNoteTuesday);
// Route to PUT/edit new Tuesnday note by ID
router.put("/tuesday/edit/:id");
// Route to Delete Tuesday note by ID
router.delete("/tuesday/delete/:id");

//WEDNESDAY CRUD
// Route to GET all Wednesday notes
router.get("/wednesday/all", getAllWednesday);
//Route to GET single note
router.get("/wednesday/note/:id");
// Route to POST new Wednesday note
router.post("/wednesday/new", createNewNoteWednesday);
// Route to PUT/edit new Wednesday note by ID
router.put("/wednesday/edit/:id");
// Route to Delete Wednesday note by ID
router.delete("/wednesday/delete/:id");

//THURSDAY CRUD
// Route to GET all Thursday notes
router.get("/thursday/all", getAllThursday);
//Route to GET single note
router.get("/thursday/note/:id");
// Route to POST new Thursday note
router.post("/thursday/new", createNewNoteThursday);
// Route to PUT/edit new Thursday note by ID
router.put("/thursday/edit/:id");
// Route to Delete Thursday note by ID
router.delete("/thursday/delete/:id");

//FRIDAY CRUD
// Route to GET all Friday notes
router.get("/friday/all", getAllFriday);
//Route to GET single note
router.get("/friday/note/:id");
// Route to POST new Friday note
router.post("/friday/new", createNewNoteFriday);
// Route to PUT/edit new Friday note by ID
router.put("/friday/edit/:id");
// Route to Delete Friday note by ID
router.delete("/friday/delete/:id");

// SATURDAY CRUD
// Route to GET all Saturday notes
router.get("/saturday/all", getAllSaturday);
//Route to GET single note
router.get("/saturday/note/:id");
// Route to POST new Saturday note
router.post("/saturday/new", createNewNoteSaturday);
// Route to PUT/edit new Saturday note by ID
router.put("/saturday/edit/:id");
// Route to Delete Saturday note by ID
router.delete("/saturday/delete/:id");

// ARCHIVE CRUD
// View all notes in archive
router.get("/archive/all", getAllArchive);
// Get all archived for notes assigned to sunday day
router.get("/archive/sunday", getAllSunArchive);
router.get("/archive/:dayofweek", getAllMonArchive);

module.exports = router;
