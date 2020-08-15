const express = require('express');
const UploadFileService = require('../../../services/upload');

const router = express.Router();

module.exports = models => {
  const {
    Asistencia,
    Factura,
    Proveedor,
  } = models;

  router.get('/', async (req, res) => {
    const all = await Asistencia.findAll();
    res.end(all);
  });

  router.post('/', async (req, res) => {
    const {
      facturaProveedorFile,
      facturaProveedor,
      asistencia,
    } = res.body;
    
    try {
      const upload = UploadFileService.uploadLocal(facturaProveedorFile);
      const facturaNew = await Factura.create({
        ...facturaProveedor,
        tipo: 'PAGO',
        descripcion: 'Factura del proveedor',
        fecha: moment(),
        estado: 'abierta',
        nombreArchivo: upload.name,
      });

      const proveedor = await Proveedor.find({ where: { id: asistencia.proveedor.id }});

      facturaNew.setProveedor(proveedor);

      const asistenciaNew = await Asistencia.create({
        ...asistencia,
      });

      asistenciaNew.addFacturas(facturaNew);
      asistenciaNew.save();
    } catch(err) {
      res.end(err);
    }

    req.end(asistenciaNew);
  });

  router.post('/:asistenciaId/facturar', async (req, res) => {
    const {
      asistenciaId,
    } = res.params;
    
    try {
      const asistencia = await Asistencia.find({ where: { id: asistenciaId }});

      if (asistencia.facturas && asistencia.facturas.length === 1) {
        const facturaCobroProveedor = await Factura.create({
          tipo: 'COBRO',
          descripcion: 'Factura a proveedor',
          estado: 'abierta',
        });

        facturaCobroProveedor.setProveedor(asistencia.proveedor.id);

        const facturaCobroHonorarios = await Factura.create({
          tipo: 'COBRO',
          descripcion: 'Factura honorarios',
          estado: 'abierta',
        });

        facturaCobroHonorarios.setAseguradora(asistencia.aseguradora.id);

        asistencia.setEstado('pendiente');
        asistencia.addAsistencias([facturaCobroProveedor, facturaCobroHonorarios]);
        asistencia.save();
      }
    } catch(err) {
      res.end(err);
    }

    req.end(asistenciaNew);
  });
}
