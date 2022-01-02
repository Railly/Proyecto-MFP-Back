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
      include: [
        {
          association: "reservas",
          include: [
            {
              association: "alojamiento",
              include: ["anuncio"],
            },
            "usuario",
          ],
        },
      ],
    })
    return res
  }

  async getByUserReceived(userId) {
    const res = Accommodation.findAll({
      where: {
        id_usuario: userId,
      },
      include: ["reserva", "anuncio", "usuario"],
    })
    return res
  }
}

const reservationService = new ReservationService()

module.exports = reservationService
