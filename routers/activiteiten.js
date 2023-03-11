const express = require("express");
const router = express.Router();
const activiteitenController = require("../controllers/activiteiten");

router.post("/", activiteitenController.create);
router.get("/", activiteitenController.get);

module.exports = router;