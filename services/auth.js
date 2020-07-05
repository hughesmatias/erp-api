const utils = require('../utils/auth');

class AuthService {
  constructor(UserModel) {
    this.user = UserModel;
  }

  async login(email, password) {
    try {
      const logged = await this.user.find({ where: { email, password } });
      const token = await utils.generateToken(logged.dataValues);

      return {
        token,
        userData: logged.dataValues,
      };
    } catch(err) {
      throw new Error("Valide sus credenciales.");
    };
  }

  async register(email, password) {
    try {
      const registred = await this.user.create({ email, password });
      const token = await utils.generateToken(registred.dataValues);

      return {
        token,
        userData: registred.dataValues,
      };
    } catch(err) {
      throw new Error(err);
    }
  }
};

module.exports = AuthService;
