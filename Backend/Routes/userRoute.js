const express = require("express");
const User = require("../Controllers/UserController");
const router = express.Router();
// const requireAuth = require("../Middleware/requireAuth");
// router.use(requireAuth);

router.post("/login", User.login);

router.post("/signup", User.signup);

module.exports = router;
