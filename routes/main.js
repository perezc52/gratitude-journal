const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const entriesController = require("../controllers/entries");
const { ensureAuth } = require("../middleware/auth");

router.get("/", homeController.getIndex);

router.post("/entry",entriesController.createEntry);
router.get("/entry", ensureAuth, entriesController.getEntryPage);
router.get("/about", ensureAuth, entriesController.getAboutPage);
router.get("/logs", ensureAuth, entriesController.getLogsPage);

router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);
router.get("/logout", authController.logout);

module.exports = router;
