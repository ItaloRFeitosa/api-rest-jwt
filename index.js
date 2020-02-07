const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const config = require('./config');

const app = express();

const connectionString = config.uri;
mongoose.connect(connectionString);
mongoose.Promise = global.Promise;

requireDir("./src/models");

const User = mongoose.model('User');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', require("./src/routes"));


app.listen(config.port);