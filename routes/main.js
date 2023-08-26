const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const entriesController = require("../controllers/entries");
const { ensureAuth } = require("../middleware/auth");

router.get("/", homeController.getIndex);

//Main routes
router.get("/entry/:id", ensureAuth, entriesController.getViewEntry);
router.get("/entry/edit/:id", ensureAuth, entriesController.getEditEntryPage);
router.get("/entry", ensureAuth, entriesController.getEntryPage);
router.get("/about", ensureAuth, entriesController.getAboutPage);
router.get("/logs", ensureAuth, entriesController.getLogsPage);

router.post("/entry", entriesController.createEntry);

router.put("/entry/:id", ensureAuth, entriesController.editEntry);

router.delete("/entry/:id", ensureAuth, entriesController.deleteEntry)

// Login/Register routes
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/signup", authController.getSignup);
router.get("/logout", authController.logout);

router.post("/signup", authController.postSignup);

module.exports = router;
