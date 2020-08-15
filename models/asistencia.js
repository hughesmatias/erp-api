module.exports = (sequelize, DataTypes) => {
  const asistencia = sequelize.define('Asistencia', {
    fecha: DataTypes.DATE,
    nombre_paciente: DataTypes.STRING,
    apellido_paciente: DataTypes.STRING,
    servicios_empleados: DataTypes.TEXT,
    estado: DataTypes.ENUM('abierta', 'pendiente', 'cerrada'),
  });

  asistencia.belongsTo(sequelize.models.Aseguradora);
  asistencia.belongsTo(sequelize.models.Proveedor);
  asistencia.belongsTo(sequelize.models.User);
  asistencia.hasMany(sequelize.models.Factura);

  return servicio;
};
