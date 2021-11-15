const boom = require("@hapi/boom")
const db = require("../models")
const accommodationTypes = db.H_Tipo_Alojamientos

class AccommodationTypeService {
  async getAll() {
    const res = await accommodationTypes.findAll()
    if (!res) {
      throw boom.notFound("No se encontraron tipos de alojamiento")
    }
    return res
  }
}

const accommodationTypeService = new AccommodationTypeService()

module.exports = accommodationTypeService
