const utils = require('../../utils/auth');
const models = require('../../models');

module.exports = async (req, res, next) => {
  const token = req.headers['authorization'] && req.headers['authorization'].split(" ");
  if (token && token[0] == 'Bearer') {
    try {
      const session = await utils.validateToken(token[1]);
      const userExist = await models.User.find({ where: { email: session.email }});
      if (userExist) {
        req.userData = session;
        next();
      } else {
        throw new Error("Valide el usuario logeado.");
      }
    } catch({ message }) {
      res.status(401).json({
        message
      }).end();
    }
  } else {
    res.status(403).end();
  }
};
