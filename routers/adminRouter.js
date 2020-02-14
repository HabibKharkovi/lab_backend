const express = require('express');
const router = express.Router();
const { add_new } = require('./../controllers/adminController');


// Routers
router.route('/signup').post(add_new);

module.exports = router;