module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    nombre: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    rol: DataTypes.STRING,
  });

  return User;
};
