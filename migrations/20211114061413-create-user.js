"use strict"
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      apellidos: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      correo: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      contraseña: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      fechaNacimiento: {
        type: Sequelize.DATE,
      },
      direccion: {
        type: Sequelize.STRING,
      },
      imagen: {
        type: Sequelize.BLOB,
      },
      DNI: {
        type: Sequelize.STRING,
        unique: true,
      },
      sexo: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Users")
  },
}
