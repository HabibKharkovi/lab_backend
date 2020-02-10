const UsersModel = require('./../models/UsersModel');


// Route Handlers

// get all users
exports.get_all = async (req, res) => {
    const users = await UsersModel.find();
    res.status(200).json({
        status: "success",
        result: users.length,
        data: {
            users
        }
    })
}

// add new user
exports.add_new = async (req, res) => {
    const user = await UsersModel.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            user
        }
    });
}

// get user
exports.get_one = async (req, res) => {
    const user = await UsersModel.findById(req.params.id);
    res.status(200).json({
        status: "success", 
        data: {
            user
        }
    });
}

// update user
exports._update = async (req, res) => {
    const user = await UsersModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({
        status: "success", 
        data: {
            user
        }
    });
}

// delete user
exports._delete = async (req, res) => {
    const user = await UsersModel.findByIdAndRemove(req.params.id);
    res.status(204).json({
        status: "success", 
        data: {
            user: null
        }
    });
}