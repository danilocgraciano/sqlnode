const express = require('express');

const UserController = require('./controllers/UserController');
const AddressController = require('./controllers/AddressController');
const TechController = require('./controllers/TechController');
const ReportController = require('./controllers/ReportController');

const routes = express.Router();

routes.post('/users', UserController.save);
routes.get('/users', UserController.all);

routes.post('/users/:user_id/address', AddressController.save);
routes.get('/users/:user_id/address', AddressController.all);

routes.post('/users/:user_id/techs', TechController.save);
routes.get('/users/:user_id/techs', TechController.all);
routes.delete('/users/:user_id/techs', TechController.delete);

routes.get('/report', ReportController.generate);

module.exports = routes;