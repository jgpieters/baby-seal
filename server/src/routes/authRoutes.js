const express = require("express");

const router = express.Router();
const authController = require("../controllers/authController");

router.route("/").post(authController.login);
router.route("/signup").post(authController.signup);
// Protect all routes after this middleware
router.use(authController.protect);

module.exports = router;
