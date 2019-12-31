const express = require('express');

const UserController = require('./controllers/UserController');
const AddressController = require('./controllers/AddressController');

const routes = express.Router();

routes.post('/users', UserController.save);
routes.get('/users', UserController.all);

routes.post('/users/:user_id/address', AddressController.save);
routes.get('/users/:user_id/address', AddressController.all);

module.exports = routes;