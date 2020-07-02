const express = require('express');
let router  = express.Router();

module.exports = models => {
  router.get('/add', (req, res) => {
    models.User.create({
      nombre: 'john-doe',
      email: 'asd@s.co',
    }).then(function(user) {
      res.json(user);
    })
  })
  
  router.get('/', function(req, res) {
    models.User.findAll().then(function(users) {
      res.json(
        users
      );
    });
  });

  return router;
};
