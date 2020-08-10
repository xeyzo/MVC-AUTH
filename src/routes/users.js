const express = require("express");
const router = express.Router();
const authenticateJWT = require("../auth");


const UsersController = require("../controllers/UserController");

router.get("/",authenticateJWT, UsersController.getUser);
router.post("/", UsersController.saveUser);

router.get("/:id", UsersController.getUserId);
router.patch("/:id", UsersController.updateUser);

router.delete("/:id", UsersController.deleteUser);

module.exports = router;
