const express = require("express");
const router = express.Router();

// Import the User model (optional if you don't need it here)
const User = require("../Model/UserModel");  // Ensure this path is correct

// Import user controller
const UserController = require("../Controllers/UserControllers");  // Ensure this path is correct

// Route for getting all users
router.get("/", UserController.getAllUsers);

// Export router
module.exports = router;

