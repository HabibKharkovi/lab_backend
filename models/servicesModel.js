const mongoose = require('mongoose');

// create services schema
const ServicesSchema = new mongoose.Schema({
    test_name: {
        type: String,
        required: [true, "Name is required"]
    },
    price: {
        type: String
    },
    code: {
        type: String
    },
    department: {
        type: String
    },
    completion_time: {
        type: Number
    },
    tube_type: {
        type: String
    },
    tube_color: {
        type: String
    },
    sample_volume: {
        type: String
    },
    test_description: {
        type: String
    },
    params: {
        type: [
            {
                params_name: {
                    type: String
                },
                min_age: {
                    type: Number
                },
                max_age: {
                    type: Number
                },
                age_units: {
                    type: String
                },
                gender: {
                    type: String
                },
                ref_range: {
                    type: String
                },
                sub_services: {
                    type: String
                },
            }
        ]
    }
});

// create patient details model
const ServicesModel = new mongoose.model('ServicesModel', ServicesSchema);

module.exports = ServicesModel;