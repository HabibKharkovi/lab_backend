const PatientsModel = require('./../models/patientsModel');


// Route Handlers

// get all patients
exports.get_all = async (req, res) => {
    const patients = await PatientsModel.find();
    res.status(200).json({
        status: "success",
        result: patients.length,
        data: {
            patients
        }
    })
}

// add new patient
exports.add_new = async (req, res) => {
    const patient = await PatientsModel.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            patient
        }
    });
}

// get patient
exports.get_one = async (req, res) => {
    const patient = await PatientsModel.findById(req.params.id);
    res.status(200).json({
        status: "success", 
        data: {
            patient
        }
    });
}

// update patient
exports._update = async (req, res) => {
    const patient = await PatientsModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({
        status: "success", 
        data: {
            patient
        }
    });
}

// delete patient
exports._delete = async (req, res) => {
    const patient = await PatientsModel.findByIdAndRemove(req.params.id);
    res.status(204).json({
        status: "success", 
        data: {
            patient: null
        }
    });
}