"use strict"
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("H_Usuarios_Anuncios", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_usuario: {
        type: Sequelize.INTEGER,
        references: {
          model: "H_Usuarios",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      id_anuncio: {
        type: Sequelize.INTEGER,
        references: {
          model: "H_Anuncios",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("H_Usuarios_Anuncios")
  },
}
