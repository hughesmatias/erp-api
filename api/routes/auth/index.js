const express = require('express');
const AuthService = require('../../../services/auth');
const router = express.Router();

module.exports = (models) => {
  const authService = new AuthService(models.User);

  router.post('/login', async ({ body }, res) => {
    try {
      if (!body.email || !body.password) {
        throw new Error('Falta Usuario o Password.');
      }
      const {
        email,
        password,
      } = body;

      const response = await authService.login(email, password);
      res.json(response).end();
    } catch ({ message }) {
      res.status(401).json({
        message
      }).end();
    };
  });

  router.post('/register', async ({ body }, res) => {
    try {
      if (!body.email || !body.password) {
        throw new Error('Requiere Usuario y Password.');
      }
      const {
        email,
        password,
      } = body;

      const response = await authService.register(email, password);
      res.json(response);
    } catch ({ message }) {
      res.status(500).json({
        message,
      }).end();
    };
  });

  return router;
};
