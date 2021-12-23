"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "H_Reservas",
      [
        {
          fecha_reserva: new Date("2020-12-20"),
          fecha_fin: new Date("2020-12-20"),
          numero_tarjeta: "123456789",
          fecha_caducidad: new Date("2020-12-20"),
          cvv: 123,
          id_alojamiento: 1,
          id_usuario: 1,
          createdAt: new Date(),
        },
        {
          fecha_reserva: new Date("2020-12-20"),
          fecha_fin: new Date("2020-12-20"),
          numero_tarjeta: "123456789",
          fecha_caducidad: new Date("2020-12-20"),
          cvv: 123,
          id_alojamiento: 2,
          id_usuario: 1,
          createdAt: new Date(),
        },
        {
          fecha_reserva: new Date("2020-12-20"),
          fecha_fin: new Date("2020-12-20"),
          numero_tarjeta: "123456789",
          fecha_caducidad: new Date("2020-12-20"),
          cvv: 123,
          id_alojamiento: 2,
          id_usuario: 1,
          createdAt: new Date(),
        },
        {
          fecha_reserva: new Date("2020-12-20"),
          fecha_fin: new Date("2020-12-20"),
          numero_tarjeta: "123456789",
          fecha_caducidad: new Date("2020-12-20"),
          cvv: 123,
          id_alojamiento: 2,
          id_usuario: 2,
          createdAt: new Date(),
        },
        {
          fecha_reserva: new Date("2020-12-20"),
          fecha_fin: new Date("2020-12-20"),
          numero_tarjeta: "123456789",
          fecha_caducidad: new Date("2020-12-20"),
          cvv: 123,
          id_alojamiento: 2,
          id_usuario: 2,
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
