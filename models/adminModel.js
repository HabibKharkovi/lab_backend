const mongoose = require('mongoose');

// create Admins schema
const AdminsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        minlength: 3,
        maxlength: 40,
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        min: 6
    },
    conform_password: {
        type: String,
        required: [true, "Conform Password is required"],
        validate: function(val){
            return val === this.password;
        }
    }
});

// create patient details model
const AdminsModel = new mongoose.model('AdminsModel', AdminsSchema);

module.exports = AdminsModel;