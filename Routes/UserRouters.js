const express = require("express");
const router = express.Router();

// Import the User model (optional if you don't need it here)
const User = require("../Model/UserModel");  // Ensure this path is correct

// Import user controller
const UserController = require("../Controllers/UserControllers");  // Ensure this path is correct

// Route for getting all users
router.get("/", UserController.getAllUsers);
router.post("/", UserController.addUsers);
router.get("/:id", UserController.getById);
router.put("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);

// Export router
module.exports = router;

