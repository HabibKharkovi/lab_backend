const mongoose = require('mongoose');
const generator = require('./../utilities/generator');

// create patients details schema
const PatientsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    age: {
        type: Number,
        required: [true, "Age is required"]
    },
    gender: {
        type: String,
        required: [true, "Gender is required"]
    },
    contact: {
        type: String,
        required: [true, "Contact Number is required"]
    },
    email: {
        type: String
    },
    patient_id: {
        type: String,
        default: generator.patient_id_generator(),
        unique: true
    },
    mr_no: {
        type: String,
        default: generator.mr_no_generator(),
        unique: true
    },
    password: {
        type: String,
        default: generator.patient_password_generator()
    },
    date: {
        type: Date,
        default: Date.now()
    },
    tests: {
        type: []
    }
});

// create patient details model
const PatientsModel = new mongoose.model('PatientsModel', PatientsSchema);

module.exports = PatientsModel;