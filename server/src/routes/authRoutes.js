const express = require("express");

const router = express.Router();
const authController = require("../controllers/authController");

router.route("/").post(authController.login);
router.use(authController.protect);
router.route("/signup").post(authController.signup);

module.exports = router;
