const express = require("express");

const router = express.Router();
const vlogController = require("../controllers/vlogController");
const authController = require("../controllers/authController");

router.route("/").get(vlogController.list);
router.route("/:id").get(vlogController.get);

router.use(authController.protect);

router.route("/").post(vlogController.create);

router
  .route("/:id")
  .get(vlogController.get)
  .patch(vlogController.update)
  .delete(vlogController.delete);

module.exports = router;
