const express = require("express");
const router = express.Router();
const examenController = require("../controllers/examens");

router.post("/", examenController.create);
router.get("/", examenController.get);

module.exports = router;