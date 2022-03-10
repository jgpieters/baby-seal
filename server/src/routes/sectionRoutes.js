const express = require("express");

const router = express.Router();
const sectionController = require("../controllers/sectionController");
const authController = require("../controllers/authController");

router.route("/").get(sectionController.list);
router.route("/:id").get(sectionController.get);

router.use(authController.protect);

router.route("/").post(sectionController.create);

router
  .route("/:id")
  .patch(sectionController.update)
  .delete(sectionController.delete);

module.exports = router;
