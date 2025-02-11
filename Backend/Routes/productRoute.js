const product = require("../Controllers/ProductController");

const express = require("express");
const router = express.Router();

router.post("/addproduct", product.addProduct);

router.get("/getAllProducts", product.getAllProducts);

router.get("/getproduct", product.getProduct);

module.exports = router;
