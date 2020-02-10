const mongoose = require('mongoose');

// create Users schema
const UsersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    conform_password: {
        type: String,
        required: [true, "Conform Password is required"]
    }
});

// create patient details model
const UsersModel = new mongoose.model('UsersModel', UsersSchema);

module.exports = UsersModel;