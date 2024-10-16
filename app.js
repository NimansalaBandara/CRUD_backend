//console.log("");
//D3uMi8NBQFJdM6Gq
const express = require("express"); 
const mongoose = require("mongoose");
const router = require("./Routes/UserRouters");  // Ensure this path is correct

// Create an instance of express
const app = express();

// Middleware for parsing JSON bodies
app.use(express.json()); // This is important for handling JSON requests

// Middleware for routing
app.use("/users", router);

// MongoDB connection
<<<<<<< HEAD
mongoose.connect("mongodb+srv://Nimansala:D3uMi8NBQFJdM6Gq@cluster0.uyte8.mongodb.net/yourDatabaseName") 
=======
mongoose.connect("mongodb+srv://Nimansala:<password>@cluster0.uyte8.mongodb.net/")
>>>>>>> 453e19150f57bf6302921f780175db9087e9d7c5
    .then(() => console.log("Connected to MongoDB"))
    .then(() => {
        app.listen(5000, () => {
            console.log("Server is running on port 5000");
        });
    })
    .catch((err) => console.log("MongoDB connection error:", err)); // More descriptive error logging
