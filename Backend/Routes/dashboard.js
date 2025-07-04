const express = require("express");
const dashboard = require("../Controllers/DashboardController");
const router = express.Router();
const requireAuth = require("../Middleware/requireAuth");
// const requireAuth = require("../Middleware/requireAuth");
// router.use(requireAuth);
router.post("/home");

module.exports = router;
