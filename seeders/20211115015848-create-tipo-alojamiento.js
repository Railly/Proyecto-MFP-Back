"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "H_Tipo_Alojamientos",
      [
        {
          descripcion: "Hotel",
        },
        {
          descripcion: "Hostal",
        },
        {
          descripcion: "Cabaña",
        },
        {
          descripcion: "Casa",
        },
        {
          descripcion: "Habitación",
        },
        {
          descripcion: "Apartamento",
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
