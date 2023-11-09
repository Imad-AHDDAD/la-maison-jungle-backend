const express = require("express");
const router = express.Router()
const plantController = require("../controllers/plantController");

router.post("/save", plantController.savePlant)

module.exports = router;