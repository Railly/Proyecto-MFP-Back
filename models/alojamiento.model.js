"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Alojamiento extends Model {
    static associate(models) {
      this.belongsTo(models.H_Tipo_Alojamientos, {
        as: "tipo_alojamiento",
        foreignKey: "id_tipo_alojamiento",
      })
      this.belongsTo(models.H_Usuarios, {
        as: "usuario",
        foreignKey: "id_usuario",
      })
    }
  }
  Alojamiento.init(
    {
      direccion: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "H_Alojamientos",
      createdAt: false,
      updatedAt: false,
    }
  )
  return Alojamiento
}
