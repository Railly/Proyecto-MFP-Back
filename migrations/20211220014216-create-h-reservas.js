"use strict"
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("H_Reservas", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      fecha_reserva: {
        type: Sequelize.DATE,
      },
      fecha_fin: {
        type: Sequelize.DATE,
      },
      numero_tarjeta: {
        type: Sequelize.STRING,
      },
      fecha_caducidad: {
        type: Sequelize.DATE,
      },
      cvv: {
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
      id_usuario: {
        type: Sequelize.INTEGER,
        references: {
          model: "H_Usuarios",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("H_Reservas")
  },
}
