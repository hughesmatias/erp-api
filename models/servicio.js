const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const servicio = sequelize.define('Servicio', {
    fecha: DataTypes.DATE,
    nombre_paciente: DataTypes.STRING,
    apellido_paciente: DataTypes.STRING,
    servicios_empleados: DataTypes.TEXT,
    estado: DataTypes.STRING,
  });

  servicio.belongsTo(sequelize.models.Proveedor);
  servicio.belongsTo(sequelize.models.Cliente);

  return servicio;
};
