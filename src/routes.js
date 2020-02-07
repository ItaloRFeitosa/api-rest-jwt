const routes = require('express').Router();

//const User = require('../models/User');

const AuthController = require('./controllers/authController');

routes.get('/', (req, res) => {
    res.send("its working")
})

routes.post('/register', AuthController.register);

module.exports = routes;