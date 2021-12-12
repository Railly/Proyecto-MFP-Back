"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "H_Imagenes_para_Anuncios",
      [
        {
          id_anuncio: 1,
          imagen:
            "https://res.cloudinary.com/homy2021/image/upload/v1639332248/Homy/Images/jgk4ze0yd125yd4sflyr.jpg",
        },
        {
          id_anuncio: 2,
          imagen:
            "https://res.cloudinary.com/homy2021/image/upload/v1639332248/Homy/Images/jgk4ze0yd125yd4sflyr.jpg",
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
