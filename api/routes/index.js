const express = require('express');
const proveedor = require('./proveedor');
const auth = require('./auth');
let router  = express.Router();
const models = require('../../models');

router.use('/proveedor', proveedor(models));
router.use('/auth', auth(models));

module.exports = router;
