const express = require("express");
const router = express.Router()
const orderController = require("../controllers/orderController");

router.post("/saveOrder", orderController.placeOrder)

module.exports = router;