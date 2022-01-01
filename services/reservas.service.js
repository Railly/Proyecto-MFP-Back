const db = require("../models")
const Reservation = db.H_Reservas
const User = db.H_Usuarios
const Accommodation = db.H_Alojamientos

class ReservationService {
  async create(announcement) {
    return Reservation.create(announcement)
  }

  async getByUser(userId) {
    const res = User.findByPk(userId, {
      include: ["reservas"],
    })
    return res
  }

  async getByUserReceived(userId) {
    // get accommodation where userId === id_usuario and "reservas" is not null
    const res = Accommodation.findAll({
      where: {
        id_usuario: userId,
      },
      include: ["reserva"],
    })
    return res
  }
}

const reservationService = new ReservationService()

module.exports = reservationService
