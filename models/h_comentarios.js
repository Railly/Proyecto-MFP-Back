"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class H_Comentarios extends Model {
    static associate(models) {
      this.belongsTo(models.H_Anuncios, {
        as: "anuncio",
        foreignKey: "id_anuncio",
      })
    }
  }
  H_Comentarios.init(
    {
      calificacion: DataTypes.INTEGER,
      contenido: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "H_Comentarios",
      updatedAt: false,
    }
  )
  return H_Comentarios
}
