const express = require('express');
let router  = express.Router();

module.exports = models => {
  router.post('/', async (req, res) => {
    const newProveedor = await models.Proveedor.create(req.body)
    res.send(newProveedor);
  });

  router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const proveedor = await models.Proveedor.update({ ...req.body }, { where: { id } });
    res.send(proveedor);
  });

  router.get('/', async (req, res) => {
    const proveedores = await models.Proveedor.findAll();
    res.send(proveedores);
  });

  router.get('/:id', async (req, res) => {
    const { id  } = req.params;
    const proveedor = await models.Proveedor.findOne({ where: { id }});
    res.send(proveedor);
  });

  router.delete('/:id', async (req, res) => {
    const { id  } = req.params;
    const proveedor = await models.Proveedor.findOne({ where: { id }});
    proveedor.destroy();
    res.send({ message: 'Deleted' });
  });

  return router;
};
