const express = require('express');
const db = require('../db/models/index.js');

let router = express.Router();

router.get('', (_, res) => {
  db.Wildcard.findAll({ raw: true }).then(wildcards => {
    res.json(wildcards);
  });
});

router.post('', (req, res) => {
  const { type } = req.body;

  // TODO: change this to accept userId from client
  db.Wildcard.create({
    type,
  })
  .then((record) => {
    const randomUser = db.User.findOne().then(result => {
      record.setUser(result);
      record.save().then((data) => {
        return res.json(data.dataValues);
      });
    });
  });
});

module.exports = router;