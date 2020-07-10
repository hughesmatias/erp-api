const dotenv = require("dotenv");
dotenv.config();

const securityActived = (process.env.WITHSECURITY === "false") ? false : null;

module.exports = {
  port: process.env.PORT || 5000,
  secret: process.env.SECRET,
  securityRoutes: process.env.SECURITY.split(" ").join("").split(","),
  withSecurity: securityActived != null ? securityActived : true,
};
