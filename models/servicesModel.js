const mongoose = require('mongoose');

// create services schema
const ServicesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    price: {
        type: String,
        required: [true, "Price is required"]
    },
    params: {
        type: []
    }
});

// create patient details model
const ServicesModel = new mongoose.model('ServicesModel', ServicesSchema);

module.exports = ServicesModel;