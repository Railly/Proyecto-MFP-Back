"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class TipoAlojamiento extends Model {
    static associate(models) {
      this.hasMany(models.H_Alojamientos, {
        foreignKey: "id_tipo_alojamiento",
        as: "alojamientos",
      })
    }
  }
  TipoAlojamiento.init(
    {
      descripcion: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "H_Tipo_Alojamientos",
      createdAt: false,
      updatedAt: false,
    }
  )
  return TipoAlojamiento
}
