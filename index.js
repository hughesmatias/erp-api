const express = require('express');
const models = require('./models');

const port = process.env.PORT;

const app = express();

app.get('/version', (req, res) => {
  res.end('version 1.0');
});

models.sequelize.sync().then(function() {
  app.listen(5000, () => console.log(`Running in 5000`));
});
