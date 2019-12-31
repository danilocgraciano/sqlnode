const express = require('express');

const UserController = require('./controllers/UserController');

const routes = express.Router();

routes.post('/users', UserController.save);
routes.get('/users', UserController.all);

module.exports = routes;