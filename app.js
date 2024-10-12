//console.log("");
//D3uMi8NBQFJdM6Gq
const express = require("express");
const mongoose = require("mongoose");

// Create an instance of express
const app = express();

// Middleware
app.use("/", (req, res, next) => {
    res.send("It Is Working");
});

// MongoDB connection
mongoose.connect("mongodb+srv://Nimansala:<password>@cluster0.uyte8.mongodb.net/")
    .then(() => console.log("Connected to MongoDB"))
    .then(() => {
        app.listen(5000, () => {
            console.log("Server is running on port 5000");
        });
    })
    .catch((err) => console.log(err));
