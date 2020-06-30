const express = require('express');

const port = process.env.PORT;

const app = express();

app.get('/version', (req, res) => {
  res.end('version 1.0');
});

app.listen(5000, () => console.log(`Running in 5000`));
