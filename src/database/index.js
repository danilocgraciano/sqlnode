const Sequelize = require('sequelize');
const config = require('../config/database');

const User = require('../models/User');

const conn = new Sequelize(config);

User.init(conn);

module.exports = conn;