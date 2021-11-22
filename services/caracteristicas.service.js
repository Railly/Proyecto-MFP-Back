require("dotenv").config()
const boom = require("@hapi/boom")
const db = require("../models")
const Features = db.H_Caracteristicas

class FeaturesService {
  async create(data) {
    const features = await Features.bulkCreate(data)
    if (!features) {
      throw boom.badRequest("Error al crear las caracteristicas")
    }
    return features
  }
}

const featuresService = new FeaturesService()

module.exports = featuresService
