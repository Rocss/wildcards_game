const fs = require('fs');
const Sequelize = require("sequelize");

module.exports = {
  development: {
    username: null,
    password: null,
    database: 'boilerplate_db',
    operatorsAliases: Sequelize.Op,
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  test: {
    username: null,
    password: null,
    database: 'boilerplate_db',
    operatorsAliases: Sequelize.Op,
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    operatorsAliases: Sequelize.Op,    
    dialect: 'postgres',
  }
}