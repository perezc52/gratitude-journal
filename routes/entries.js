const express = require("express");
const router = express.Router();
const entriesController = require("../controllers/entries");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.post("/entry", entriesController.createEntry);
router.get("/entry", entriesController.getEntryPage);

module.exports = router;