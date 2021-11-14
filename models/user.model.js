"use strict"
const { Model } = require("sequelize")

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      nombre: DataTypes.STRING,
      apellidos: DataTypes.STRING,
      correo: DataTypes.STRING,
      contraseña: DataTypes.STRING,
      fechaNacimiento: DataTypes.DATE,
      direccion: DataTypes.STRING,
      imagen: DataTypes.BLOB,
      DNI: DataTypes.STRING,
      sexo: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "User",
    }
  )
  return User
}
