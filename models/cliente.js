module.exports = (sequelize, DataTypes) => {
  const cliente = sequelize.define('Cliente', {
    contrato_digital: DataTypes.DATE,
    datos_bancarios: DataTypes.TEXT,
    datos_fiscales: DataTypes.TEXT,
    datos_contacto: DataTypes.TEXT,
    plazo_cobro: DataTypes.STRING,
    fee: DataTypes.FLOAT,
  });

  return cliente;
};

