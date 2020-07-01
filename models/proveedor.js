module.exports = (sequelize, DataTypes) => {
  const proveedor = sequelize.define('Proveedor', {
    contrato_digital: DataTypes.DATE,
    datos_fiscales: DataTypes.TEXT,
    datos_contacto: DataTypes.TEXT,
    plazo_pago: DataTypes.STRING,
    servicios: DataTypes.TEXT,
    zona_cobertura: DataTypes.TEXT,
    prioridad: DataTypes.INTEGER,
  });

  return proveedor;
};
