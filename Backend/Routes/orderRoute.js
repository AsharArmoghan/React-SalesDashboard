const order = require("../Controllers/OrderController");

const express = require("express");
const router = express.Router();

router.post("/addorder", order.addOrder);

router.get("/getAllorders", order.getAllOrders);

router.get("/getorder", order.getOrder);

module.exports = router;
