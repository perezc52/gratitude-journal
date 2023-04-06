const express = require("express");
const router = express.Router();
const entriesController = require("../controllers/entries");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.post("/createEntry", entriesController.createEntry);

module.exports = router;