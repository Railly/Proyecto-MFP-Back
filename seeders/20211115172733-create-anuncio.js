"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "H_Anuncios",
      [
        {
          descripcion: "Descripcion 1",
          precio: "100",
          nombre: "Nombre 1",
          id_alojamiento: 1,
        },
        {
          descripcion: "Descripcion 2",
          precio: "200",
          nombre: "Nombre 2",
          id_alojamiento: 2,
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
