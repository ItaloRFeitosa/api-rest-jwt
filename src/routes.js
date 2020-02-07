const routes = require('express').Router();

//const User = require('../models/User');

const AuthController = require('./controllers/AuthController');

routes.get('/', (req, res) => {
    res.send({
        message: "its working"
    });
})

routes.post('/register', AuthController.register);

//routes.get('/users', UserController.index);

module.exports = routes;