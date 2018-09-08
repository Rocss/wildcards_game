const Sequelize = require('sequelize');
const express = require('express');
const expressValidator = require('express-validator');
const bodyParser = require('body-parser');
const config = require('./config/database.js');

const users  = require('./routes/users');

const { database, username, password } = config.development;

const sequelize = new Sequelize(database, username, password, {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: Sequelize.Op,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

var app = express();
app.use(expressValidator());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/users', users);

sequelize
  .authenticate()
  .then(() => {
    app.listen(3000, () => console.log('Example app listening on port 3000!'))
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });