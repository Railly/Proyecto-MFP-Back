"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class H_Usuarios_Anuncios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  H_Usuarios_Anuncios.init(
    {
      id_usuario: DataTypes.INTEGER,
      id_anuncio: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "H_Usuarios_Anuncios",
      createdAt: false,
      updatedAt: false,
    }
  )
  return H_Usuarios_Anuncios
}
