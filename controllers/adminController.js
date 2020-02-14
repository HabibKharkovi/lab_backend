const AdminModel = require('./../models/adminModel');


// Route Handlers

// add new admin
exports.add_new = async (req, res) => {
    const admin = await AdminModel.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            admin
        }
    });
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