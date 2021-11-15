require("dotenv").config()
const boom = require("@hapi/boom")
const db = require("../models")
const Features = db.H_Caracteristicas

class FeaturesService {
  async create(data) {
    const feature = await Features.create(data)
    if (!feature) {
      throw boom.badRequest("Error al crear la caracteristica")
    }
    return feature
  }
}

const featuresService = new FeaturesService()

module.exports = featuresService
