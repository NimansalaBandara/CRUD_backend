const User = require("../Model/UserModel"); // Import the User model

// Get all users
const getAllUsers = async (req, res, next) => {
    let users;

    try {
        users = await User.find();
    } catch (err) {
        console.error(err); // Log the error
        return res.status(500).json({ message: "Server error" });
    }

    // If no users found
    if (!users || users.length === 0) {
        return res.status(404).json({ message: "Users not found" });
    }

    return res.status(200).json({ users });
};

// Add a user
const addUsers = async (req, res, next) => {
    const { name, gmail, age, address } = req.body; // Destructure the body correctly

    let user;
    try {
        // Corrected the typo in 'address'
        user = new User({ name, gmail, age, address });
        await user.save(); // Save user to the database
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Server error" });
    }

    // If user not inserted
    if (!user) {
        return res.status(404).json({ message: "Unable to add user" });
    }

    return res.status(200).json({ user });
};
const getById = async (req, res, next) => {
    const id = req.params.id;
    let user;

    try{
        user = await User.findById(id);
    }catch(err){
        console.log(err);
    }
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ user });

}
// Exporting the functions
const updateUser = async (req, res, next) =>{
    const id = req.params.id;
    const { name, gmail, age, address } = req.body;
    let users;
    try{
        users = await User.findByIdAndUpdate(id,
           {name:name, gmail:gmail, age:age} 
        );
        users =  await users.save();
    }catch(err){
        console.log(err);
    }
    if (!users) {
        return res.status(404).json({ message: "Unable to update user details" });
    }

    return res.status(200).json({ users });
}

const deleteUser = async (req, res, next) => {
    const id = req.params.id;

    let user;

    try{
        user= await User.findByIdAndDelete(id);
    }catch(err){
        console.log(err);
    }
    if (!user) {
        return res.status(404).json({ message: "Unable to delete" });
    }

    return res.status(200).json({ user });
    
}
exports.getAllUsers = getAllUsers;
exports.addUsers = addUsers;
exports.getById = getById;
exports.updateUser =  updateUser;
exports.deleteUser = deleteUser;
