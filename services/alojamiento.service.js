const boom = require("@hapi/boom")
const db = require("../models")
const Accommodation = db.H_Alojamientos

class AccommodationService {
  async getAll() {
    const accommodations = await Accommodation.findAll({
      include: [
        {
          association: "usuario",
          attributes: ["id", "nombre", "apellidos"],
        },
        "caracteristica",
        "tipo_alojamiento",
      ],
    })
    return accommodations
  }

  async create(accommodation) {
    console.log(accommodation, "acc")
    const newAccommodation = await Accommodation.create(accommodation)
    if (!newAccommodation) {
      throw boom.badRequest("Accommodation not created")
    }
    return newAccommodation
  }

  async getById(id) {
    const accommodation = await Accommodation.findOne({
      where: {
        id,
      },
      include: ["usuario"],
    })
    if (!accommodation) {
      throw boom.notFound("Accommodation not found")
    }
    return accommodation
  }
}

const accommodationService = new AccommodationService()

module.exports = accommodationService
