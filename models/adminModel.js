const mongoose = require('mongoose');

// create Admins schema
const AdminsSchema = new mongoose.Schema({
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
const AdminsModel = new mongoose.model('AdminsModel', AdminsSchema);

module.exports = AdminsModel;