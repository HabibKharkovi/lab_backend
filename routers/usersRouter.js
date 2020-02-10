const express = require('express');
const router = express.Router();
const {
    get_all,
    add_new,
    get_one,
    _update,
    _delete
} = require('./../controllers/usersController');


// Routers
router
    .route('/')
    .get(get_all)
    .post(add_new);
router
    .route('/:id')
    .get(get_one)
    .patch(_update)
    .delete(_delete);

module.exports = router;