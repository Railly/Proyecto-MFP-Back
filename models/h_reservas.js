"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class H_Reservas extends Model {
    static associate(models) {
      this.belongsTo(models.H_Alojamientos, {
        as: "alojamiento",
        foreignKey: "id_alojamiento",
      })
      this.belongsTo(models.H_Usuarios, {
        as: "usuario",
        foreignKey: "id_usuario",
      })
    }
  }
  H_Reservas.init(
    {
      fecha_reserva: DataTypes.DATE,
      fecha_fin: DataTypes.DATE,
      numero_tarjeta: DataTypes.STRING,
      fecha_caducidad: DataTypes.DATE,
      cvv: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "H_Reservas",
      updatedAt: false,
    }
  )
  return H_Reservas
}
