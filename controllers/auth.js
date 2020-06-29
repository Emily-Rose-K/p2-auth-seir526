// require express
const express = require('express')
// import router
const router = express.Router();
// import db
const db = require('../models');
// import middleware
const flash = require('flash')

// register get route
router.get('/register', function(req, res) {
    res.render('auth/register')
})
// register post route
router.post('/register', function(req, res) {
    db.user.findOrCreate({
        where: {
            email: req.body.email
        }, defaults: {
            name: req.body.name,
            password: req.body.password
        }
    }).then(function([user, created]) {
        // if user was created
        if(created) {
            // authenticate user and start authorization process
            console.log('User created! ⭐️')
            res.redirect('/')
        } else {
        // else if user is found
        console.log('User email already exists. 💥')
         // send error to user that eamil already exists
         req.flash('Uh-oh! That email is already in use. 📬')
        //redirect back to register get route
        res.redirect('auth/register')
        }     
    }).catch(function(err) {
        console.log(`Looks like there was a problem.\n Message: ${err.message}. \n Please review - ${err}`)
        req.flash(`error`, err.message);
        res.redirect('auth/register');
    })
})

// login get route
router.get('/login', function(req, res) {
    res.render('auth/login');
})
// login post route

//export router
module.exports = router;


