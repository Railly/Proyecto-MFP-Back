const boom = require("@hapi/boom")
const db = require("../models")
const accommodationTypes = db.H_Tipo_Alojamientos

class AccommodationTypeService {
  async getAll() {
    return accommodationTypes.findAll()
  }
}

const accommodationTypeService = new AccommodationTypeService()

module.exports = accommodationTypeService
