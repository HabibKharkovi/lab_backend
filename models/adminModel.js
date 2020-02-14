const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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
        unique: true,
        validate: function(val){
            const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return val.match(mailformat) ?  true :  false;
        }
    },
    password: {
        type: String, 
        required: [true, "Password is required"],
        min: 6
    },
    conform_password: {
        type: String,
        required: [true, "Conform Password is required"],
        validate: {
            validator: function(val){
                return val === this.password;
            },
            message: 'Password are not the same'
        }
    }
});

AdminsSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12);
    this.conform_password = undefined;
    next()
});

AdminsSchema.methods.correct_password = async function(login_password, store_password){
    return await bcrypt.compare(login_password, store_password);
}

// create patient details model
const AdminsModel = new mongoose.model('AdminsModel', AdminsSchema);

module.exports = AdminsModel;