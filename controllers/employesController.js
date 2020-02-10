const EmployesModel = require('./../models/employesModel');


// Route Handlers

// get all employes
exports.get_all = async (req, res) => {
    const employes = await EmployesModel.find();
    res.status(200).json({
        status: "success",
        result: employes.length,
        data: {
            employes
        }
    })
}

// add new employe
exports.add_new = async (req, res) => {
    const employe = await EmployesModel.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            employe
        }
    });
}

// get employe
exports.get_one = async (req, res) => {
    const employe = await EmployesModel.findById(req.params.id);
    res.status(200).json({
        status: "success", 
        data: {
            employe
        }
    });
}

// update employe
exports._update = async (req, res) => {
    const employe = await EmployesModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({
        status: "success", 
        data: {
            employe
        }
    });
}

// delete employe
exports._delete = async (req, res) => {
    const employe = await EmployesModel.findByIdAndRemove(req.params.id);
    res.status(204).json({
        status: "success", 
        data: {
            employe: null
        }
    });
}