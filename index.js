const express = require('express');
const models = require('./models');
const {
  port,
} = require('./config');

const app = express();

app.get('/version', (req, res) => {
  res.end('version 1.0');
});

models.sequelize.sync().then(function() {
  app.listen(port, () => console.log(`Running in ${port}`));
});
