const express = require("express");

const router = express.Router();
const blogController = require("../controllers/blogController");
const authController = require("../controllers/authController");

router.route("/:id").get(blogController.get);
router.route("/").get(blogController.list);
router.use(authController.protect);

router.route("/:id").delete(blogController.delete).patch(blogController.update);
router.route("/").post(blogController.create);

module.exports = router;
