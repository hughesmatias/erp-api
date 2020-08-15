const express = require('express');
const proveedor = require('./proveedor');
const aseguradora = require('./aseguradora');
const asistencia = require('./asistencia');
const auth = require('./auth');
let router  = express.Router();
const models = require('../../models');

router.use('/auth', auth(models));
router.use('/proveedor', proveedor(models));
router.use('/aseguradora', aseguradora(models));
router.use('/asistencia', asistencia(models));

module.exports = router;
