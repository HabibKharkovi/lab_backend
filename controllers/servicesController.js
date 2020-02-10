const ServicesModel = require('./../models/ServicesModel');


// Route Handlers

// get all services
exports.get_all = async (req, res) => {
    const services = await ServicesModel.find();
    res.status(200).json({
        status: "success",
        result: services.length,
        data: {
            services
        }
    })
}

// add new service
exports.add_new = async (req, res) => {
    const service = await ServicesModel.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            service
        }
    });
}

// get service
exports.get_one = async (req, res) => {
    const service = await ServicesModel.findById(req.params.id);
    res.status(200).json({
        status: "success", 
        data: {
            service
        }
    });
}

// update service
exports._update = async (req, res) => {
    const service = await ServicesModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({
        status: "success", 
        data: {
            service
        }
    });
}

// delete service
exports._delete = async (req, res) => {
    const service = await ServicesModel.findByIdAndRemove(req.params.id);
    res.status(204).json({
        status: "success", 
        data: {
            service: null
        }
    });
}