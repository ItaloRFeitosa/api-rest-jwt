const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();

const connectionString = 'mongodb+srv://italo:uBpKLuyxHBnM16kA@apimongo-6vn6x.gcp.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(connectionString);
mongoose.Promise = global.Promise;

requireDir("./src/models");

const User = mongoose.model('User');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', require("./src/routes"));


app.listen(3000);