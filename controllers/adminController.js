const AdminModel = require('./../models/adminModel');
const jwt = require('jsonwebtoken');


signToken = id => {
    return jwt.sign(
            { id: id }, 
            process.env.JWT_SECRET, 
            { expiresIn: process.env.JWT_EXPIRES_IN }
        )
}


// Route Handlers

// sign up admin
exports.sign_up = async (req, res) => {
    const admin = await AdminModel.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        conform_password: req.body.conform_password
    });

    const token = signToken(admin._id);

    res.status(201).json({
        status: 'success',
        token,
        data: {
            admin
        }
    });
}

// login admin
exports.login = async (req, res, next) => {
    const { email, password } = req.body;

    if(!email || !password) 
        return next(console.log('please enter valid email or password'));

    const admin = await AdminModel.findOne({ email }).select('+password');

    if(!admin || !(await admin.correct_password(password, admin.password)))
        return next(console.log('Incorrect email or password'));

    const token = signToken(admin._id);

    res.status(200).json({
        status: 'success',
        token: token
    })

}















// get all admins
// exports.get_all = async (req, res) => {
//     const admins = await AdminModel.find();
//     res.status(200).json({
//         status: "success",
//         result: admins.length,
//         data: {
//             admins
//         }
//     })
// }

// // get admin
// exports.get_one = async (req, res) => {
//     const admin = await AdminModel.findById(req.params.id);
//     res.status(200).json({
//         status: "success", 
//         data: {
//             admin
//         }
//     });
// }

// // update admin
// exports._update = async (req, res) => {
//     const admin = await AdminModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.status(200).json({
//         status: "success", 
//         data: {
//             admin
//         }
//     });
// }

// // delete admin
// exports._delete = async (req, res) => {
//     const admin = await AdminModel.findByIdAndRemove(req.params.id);
//     res.status(204).json({
//         status: "success", 
//         data: {
//             admin: null
//         }
//     });
// }