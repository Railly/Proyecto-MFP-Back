"use strict"
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("H_Caracteristicas", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      descripcion: {
        type: Sequelize.STRING,
      },
      cantidad: {
        type: Sequelize.INTEGER,
      },
      id_alojamiento: {
        type: Sequelize.INTEGER,
        references: {
          model: "H_Alojamientos",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("H_Caracteristicas")
  },
}
