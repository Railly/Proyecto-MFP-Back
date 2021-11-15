"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "H_Caracteristicas",
      [
        {
          descripcion: "Baños",
          cantidad: 1,
          id_alojamiento: 1,
        },
        {
          descripcion: "Habitaciones",
          cantidad: 1,
          id_alojamiento: 1,
        },
        {
          descripcion: "Huespedes",
          cantidad: 1,
          id_alojamiento: 1,
        },
        {
          descripcion: "Estacionamientos",
          cantidad: 1,
          id_alojamiento: 1,
        },
        {
          descripcion: "Piscina",
          cantidad: 1,
          id_alojamiento: 1,
        },
        {
          descripcion: "Jacuzzi",
          cantidad: 1,
          id_alojamiento: 1,
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
}
