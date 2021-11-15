const boom = require("@hapi/boom")
const db = require("../models")
const Accommodation = db.H_Alojamientos

class AccommodationService {
  async getAll() {
    const accommodations = await Accommodation.findAll({
      include: ["usuario"],
    })
    return accommodations
  }

  async create(accommodation) {
    const newAccommodation = await Accommodation.create(accommodation)
    if (!newAccommodation) {
      throw boom.badRequest("Accommodation not created")
    }
    return newAccommodation
  }
}

const accommodationService = new AccommodationService()

module.exports = accommodationService
