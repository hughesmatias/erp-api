const express = require('express');
const bodyParser = require('body-parser');
const models = require('../models');
const {
  port,
  secret,
  securityRoutes,
} = require('../config');
const authenticate = require('./middlewares/authentication');

const routes = require('./routes');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(securityRoutes, authenticate);

app.get('/version', (req, res) => {
  res.end('version 1.0');
});

models.sequelize.sync().then(() => {
  app.use('/', routes);
  app.listen(port, () => console.log(`Running in ${port}`));
});