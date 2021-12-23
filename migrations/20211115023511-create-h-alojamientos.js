"use strict"
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("H_Alojamientos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      direccion: {
        type: Sequelize.STRING,
      },
      id_tipo_alojamiento: {
        type: Sequelize.INTEGER,
        references: {
          model: "H_Tipo_Alojamientos",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      id_usuario: {
        type: Sequelize.INTEGER,
        references: {
          model: "H_Usuarios",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("H_Alojamientos")
  },
}
