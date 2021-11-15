"use strict"
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("H_Tipo_Alojamientos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      descripcion: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("H_Tipo_Alojamientos")
  },
}
