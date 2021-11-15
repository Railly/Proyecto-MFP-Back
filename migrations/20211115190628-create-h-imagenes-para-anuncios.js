"use strict"
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("H_Imagenes_para_Anuncios", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      imagen: {
        type: Sequelize.TEXT,
      },
      id_anuncio: {
        type: Sequelize.INTEGER,
        references: {
          model: "H_Anuncios",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("H_Imagenes_para_Anuncios")
  },
}
