const express = require('express');
const router = express.Router();
const { sign_up, login } = require('./../controllers/adminController');


// Routers
router.route('/signup').post(sign_up);
router.route('/login').post(login);

module.exports = router;