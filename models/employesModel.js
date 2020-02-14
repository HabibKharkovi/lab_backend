const mongoose = require('mongoose');

// create Employes schema
const EmployesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    age: {
        type: Number,
        required: [true, "Age is required"]
    },
    father_name: {
        type: String,
        required: [true, "Father name is required"]
    },
    cnic: {
        type: Number,
        required: [true, "CNIC number is required"]
    },
    salary: {
        type: String,
        required: [true, "Salary is required"]
    },
    address: {
        type: String,
        required: [true, "Address is required"]
    },
    role: {
        type: String,
        required: [true, "Role is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
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
const EmployesModel = new mongoose.model('EmployesModel', EmployesSchema);

module.exports = EmployesModel;