module.exports = (sequelize, DataTypes) => {
  const factura = sequelize.define('Factura', {
    tipo: DataTypes.ENUM('PAGO', 'COBRO'),
    descripcion: DataTypes.STRING,
    monto: DataTypes.FLOAT,
    moneda: DataTypes.STRING,
    fecha: DataTypes.DATE,
    fechaEstimada: DataTypes.DATE,
    estado: DateTypes.ENUM('abierta', 'finalizada'),
    nombreArchivo: DataTypes.STRING,
  });

  factura.belongsTo(sequelize.models.Asistencia);
  factura.belongsTo(sequelize.models.Proveedor);
  factura.belongsTo(sequelize.models.Aseguradora);

  return factura;
};
