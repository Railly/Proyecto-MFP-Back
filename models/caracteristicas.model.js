"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Caracteristicas extends Model {
    static associate(models) {
      this.belongsTo(models.H_Alojamientos, {
        as: "alojamiento",
        foreignKey: "id_alojamiento",
      })
    }
  }
  Caracteristicas.init(
    {
      descripcion: DataTypes.STRING,
      cantidad: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "H_Caracteristicas",
      createdAt: false,
      updatedAt: false,
    }
  )
  return Caracteristicas
}
