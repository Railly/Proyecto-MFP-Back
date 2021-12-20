"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "H_Alojamientos",
      [
        {
          direccion: "Calle 1",
          id_tipo_alojamiento: 1,
          id_usuario: 1,
        },
        {
          direccion: "Calle 2",
          id_tipo_alojamiento: 2,
          id_usuario: 2,
        },
        {
          direccion: "Calle 3",
          id_tipo_alojamiento: 3,
          id_usuario: 3,
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
