"use strict"
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("H_Anuncios", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      descripcion: {
        type: Sequelize.STRING,
      },
      precio: {
        type: Sequelize.DECIMAL(10, 2),
      },
      nombre: {
        type: Sequelize.STRING,
      },
      id_alojamiento: {
        type: Sequelize.INTEGER,
        references: {
          model: "H_Alojamientos",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("H_Anuncios")
  },
}
