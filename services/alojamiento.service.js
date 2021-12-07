const boom = require("@hapi/boom")
const db = require("../models")
const Accommodation = db.H_Alojamientos

class AccommodationService {
  async getAll() {
    return Accommodation.findAll({
      include: [
        {
          association: "usuario",
          attributes: ["id", "nombre", "apellidos"],
        },
        "caracteristica",
        "tipo_alojamiento",
      ],
    })
  }

  async create(accommodation) {
    return Accommodation.create(accommodation)
  }

  async delete(id) {
    const accommodation = await Accommodation.findByPk(id)
    if (!accommodation) {
      throw boom.notFound("Accommodation not found")
    }
    return accommodation.destroy()
  }

  async getById(id) {
    return Accommodation.findOne({
      where: {
        id,
      },
      include: [
        {
          association: "usuario",
          attributes: ["id", "nombre", "apellidos"],
        },
        "caracteristica",
        "tipo_alojamiento",
        {
          association: "anuncio",
          include: ["imagen"],
        },
      ],
    })
  }
}

const accommodationService = new AccommodationService()

module.exports = accommodationService
