const express = require('express');
const db = require('../db/models/index.js');

let router  = express.Router();

router.get('', (_, res) => {
  db.User.findAll({ raw: true }).then(users => {
    res.json(users);
  });
});

module.exports = router;