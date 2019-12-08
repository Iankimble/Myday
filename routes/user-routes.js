const express = require("express");

const {
  userById,
  getUser,
  deleteUser
} = require("../controllers/user-crud-controller");

const { requireSignin } = require("../controllers/auth-controller");

const router = express.Router();

// Get user
router.get("/user/:userId", requireSignin, getUser);

// Delete account
router.delete("/user/:userId", requireSignin, deleteUser);

// verify user
router.param("userId", userById);

module.exports = router;
