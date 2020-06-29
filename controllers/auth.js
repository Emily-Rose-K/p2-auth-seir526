// require express
const express = require('express')
// import router
const router = express.Router();
// import db
const db = require('../models');
// import middleware

// register get route
router.get('/register', function(req, res) {
    res.render('auth/registers')
})
// register post route

// login get route
router.get('/login', function(req, res) {
    res.render('auth/login');
})
// login post route

//export router
module.exports = router;


