const Sequelize = require('sequelize');
const config = require('../config/database');

const User = require('../models/User');
const Address = require('../models/Address');

const conn = new Sequelize(config);

User.init(conn);
Address.init(conn);

User.associate(conn.models);
Address.associate(conn.models);

module.exports = conn;