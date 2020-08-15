const express = require('express');
const UploadFileService = require('../../../services/upload');

const router = express.Router();

module.exports = models => {
  const {
    Aseguradora,
  } = models;

  router.get('/', async (req, res) => {
    const all = await Aseguradora.findAll();
    res.end(all);
  });

  router.post('/', async (req, res) => {
    const {
      contrato_digital,
    } = res.body;
    const upload = UploadFileService.uploadLocal(contrato_digital);
    const saved = await Aseguradora.create({
      ...req.body,
      contrato_digital: upload.name,
    });
    req.end(saved);
  });
}
