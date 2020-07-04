var jwt = require('jsonwebtoken');

module.exports = (secret) => (req, res, next) => {
  const token = req.header['Authorization'] && req.header['Authorization'].split(" ");
  token && token[0] == 'Bearer' && 
  (
    jwt.verify(token, secret, (err, decoded) => {
      next();
    })
  ) || res.status(403).end();
};
