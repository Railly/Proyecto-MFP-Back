"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "H_Comentarios",
      [
        {
          calificacion: 5,
          contenido: "Muy buen servicio",
          id_anuncio: 1,
          createdAt: new Date(),
        },
        {
          calificacion: 4,
          contenido: "Buen servicio",
          id_anuncio: 1,
          createdAt: new Date(),
        },
        {
          calificacion: 3,
          contenido: "Regular servicio",
          id_anuncio: 1,
          createdAt: new Date(),
        },
        {
          calificacion: 2,
          contenido: "Malo servicio",
          id_anuncio: 1,
          createdAt: new Date(),
        },
        {
          calificacion: 1,
          contenido: "Muy mal servicio",
          id_anuncio: 1,
          createdAt: new Date(),
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
