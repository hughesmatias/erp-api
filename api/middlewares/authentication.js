const utils = require('../../utils/auth');
module.exports = (req, res, next) => {
  const token = req.header['Authorization'] && req.header['Authorization'].split(" ");
  if (token && token[0] == 'Bearer') {
    try {
      utils.validateToken(token) && next();
    } catch(err) {
      res.status(401).send(err);
    }
  }
  res.status(403).end();
};
