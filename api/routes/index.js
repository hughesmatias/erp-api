const express = require('express');
const proveedor = require('./proveedor');
let router  = express.Router();
const models = require('../../models');

router.use('/proveedor', proveedor(models));

module.exports = router;
