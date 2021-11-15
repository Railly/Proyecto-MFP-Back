"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "H_Usuarios",
      [
        {
          nombre: "Railly",
          apellidos: "Hugo Quispe",
          correo: "raillyhugo@gmail.com",
          contraseña:
            "$2b$10$KbGzWGZBmYrL2Dczokl5POrb3XXcVpE7q5webrWStY1Yh39tsLDeS",
        },
        {
          nombre: "Elian",
          apellidos: "Gomez Huanca",
          correo: "eliangomez13@gmail.com",
          contraseña:
            "$2b$10$KbGzWGZBmYrL2Dczokl5POrb3XXcVpE7q5webrWStY1Yh39tsLDeS",
        },
        {
          nombre: "Daniel",
          apellidos: "Tarmeño Noriega",
          correo: "danieltarmeno@gmail.com",
          contraseña:
            "$2b$10$KbGzWGZBmYrL2Dczokl5POrb3XXcVpE7q5webrWStY1Yh39tsLDeS",
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
