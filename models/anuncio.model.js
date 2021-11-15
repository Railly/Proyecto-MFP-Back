"use strict"
const { Model } = require("sequelize")

module.exports = (sequelize, DataTypes) => {
  class Anuncios extends Model {
    static associate(models) {
      this.belongsTo(models.H_Alojamientos, {
        as: "alojamiento",
        foreignKey: "id_alojamiento",
      })
    }
  }
  Anuncios.init(
    {
      descripcion: DataTypes.STRING,
      precio: DataTypes.DECIMAL(10, 2),
      nombre: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "H_Anuncios",
      updatedAt: false,
    }
  )
  return Anuncios
}
