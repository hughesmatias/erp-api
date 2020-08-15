module.exports = (sequelize, DataTypes) => {
  const asegurado = sequelize.define('Aseguradora', {
    contrato_digital: DataTypes.STRING,
    contrato_digital_fecha: DataTypes.DATE,
    datos_bancarios: DataTypes.TEXT,
    datos_fiscales: DataTypes.TEXT,
    datos_contacto: DataTypes.TEXT,
    plazo_facturacion: DataTypes.STRING,
    plazo_cobro: DataTypes.STRING,
    fee: DataTypes.FLOAT,
  });

  asegurado.hasMany(sequelize.models.Factura, { through: 'Convenio'});
  asegurado.hasMany(sequelize.models.Asistencia);

  return asegurado;
};
