const jwt = require('jsonwebtoken');
const {
  secret,
} = require('../config');

const generateToken = async (obj) => jwt.sign(JSON.stringify(obj), secret);

const validateToken = async (token) => jwt.verify(token, secret)

module.exports = {
  generateToken,
  validateToken,
};
