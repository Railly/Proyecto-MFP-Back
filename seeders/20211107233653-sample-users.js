"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     */
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          firstName: "Railly",
          lastName: "Hugo",
          email: "raillyhugo@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Elian",
          lastName: "Gomez",
          email: "eliangomez@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Daniel",
          lastName: "Tarmeño",
          email: "danieltarmeno@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     */
    await queryInterface.bulkDelete("Users", null, {})
  },
}
