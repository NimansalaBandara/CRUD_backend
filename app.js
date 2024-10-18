//console.log("");

const express = require("express"); 
const mongoose = require("mongoose");
const router = require("./Routes/UserRouters");  // Ensure this path is correct

// Create an instance of express
const app = express();

// Middleware for parsing JSON bodies
app.use(express.json()); // This is important for handling JSON requests

// Middleware for routing
app.use("/users", router);
//app.use(express.json()); 
// MongoDB connection
mongoose.connect("mongodb+srv://Nimansala:@cluster0.uyte8.mongodb.net/yourDatabaseName") 
mongoose.connect("mongodb+srv://Nimansala:@cluster0.uyte8.mongodb.net/")
    .then(() => console.log("Connected to MongoDB"))
    .then(() => {
        app.listen(5000, () => {
            console.log("Server is running on port 5000");
        });
    })
    .catch((err) => console.log("MongoDB connection error:", err)); // More descriptive error logging
