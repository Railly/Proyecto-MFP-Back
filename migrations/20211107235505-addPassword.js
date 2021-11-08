"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     */
    await queryInterface.addColumn("Users", "password", {
      type: Sequelize.DataTypes.STRING,
      // allowNull: false,
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     */
    await queryInterface.removeColumn("Users", "password")
  },
}
