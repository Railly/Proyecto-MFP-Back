"use strict"
const { Model } = require("sequelize")

module.exports = (sequelize, DataTypes) => {
  class ImagenesParaAnuncios extends Model {
    static associate(models) {
      this.belongsTo(models.H_Anuncios, {
        as: "anuncio",
        foreignKey: "id_anuncio",
      })
    }
  }
  ImagenesParaAnuncios.init(
    {
      imagen: DataTypes.BLOB,
    },
    {
      sequelize,
      modelName: "H_Imagenes_para_Anuncios",
      createdAt: false,
      updatedAt: false,
    }
  )
  return ImagenesParaAnuncios
}
