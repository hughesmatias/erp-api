const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  port: process.env.PORT || 5000,
  secret: process.env.SECRET,
  securityRoutes: process.env.SECURITY.split(' ').join('').split(','),
};
