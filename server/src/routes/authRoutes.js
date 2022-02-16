const express = require("express");

const router = express.Router();
const authController = require("../controllers/authController");

router.post("/login", authController.login);

// Protect all routes after this middleware
router.use(authController.protect);

module.exports = router;
