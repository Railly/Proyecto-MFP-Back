"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "H_Usuarios_Anuncios",
      [
        {
          id_usuario: 1,
          id_anuncio: 1,
        },
        {
          id_usuario: 2,
          id_anuncio: 2,
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
