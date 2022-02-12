const express = require("express");

const router = express.Router();
const blogController = require("../controllers/blogController");
const authController = require("../controllers/authController");

router.route("/").get(blogController.list).post(blogController.create);

router.route("/:id").get(blogController.get);

router.route("/");

router.use(authController.protect);

module.exports = router;
