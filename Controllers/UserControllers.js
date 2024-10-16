const User = require("../Model/UserModel"); // Import the User model

const getAllUsers = async (req, res, next) => {
    let users; // Use camelCase for variable names

    // Get all users
    try {
        users = await User.find();
    } catch (err) {
        console.error(err); // Log the error to the console
        return res.status(500).json({ message: "Server error" }); // Return a 500 status on error
    }

    // If no users found
    if (!users || users.length === 0) {
        return res.status(404).json({ message: "Users not found" });
    }

    // Return all users
    return res.status(200).json({ users });
};

// Exporting the getAllUsers function
exports.getAllUsers = getAllUsers;
