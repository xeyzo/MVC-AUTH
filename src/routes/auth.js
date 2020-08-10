const express = require("express");
const router = express.Router();

const UsersController = require("../controllers/UserController");

router.post("/login", UsersController.login);

module.exports = router;
