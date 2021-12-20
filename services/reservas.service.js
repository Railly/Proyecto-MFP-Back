const db = require("../models")
const Reservation = db.H_Reservas
const User = db.H_Usuarios

class ReservationService {
  async create(announcement) {
    return Reservation.create(announcement)
  }

  async getByUser(userId) {
    const res = User.findByPk(userId, {
      include: ["reservas"],
    })
    if (!res) {
      throw boom.badRequest("Error al obtener las reservas")
    }
    return res
  }
}

const reservationService = new ReservationService()

module.exports = reservationService
