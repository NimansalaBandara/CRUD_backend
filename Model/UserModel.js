const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String, // datatype
        required: true, // validation
    },
    gmail:{
        type:String,
        required:true,
    },
    age: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true, // validation
    }
});

module.exports = mongoose.model(
    "UserModel", // model name
    userSchema   // schema
);

