const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");

router.use(authController.protect);

router.route("/deleteMe").delete(userController.delete);

router.use(authController.restrictTo("admin"));

router.route("/").get(userController.list);

router
  .route("/:id")
  .get(userController.get)
  .patch(userController.update)
  .delete(userController.delete);

module.exports = router;
