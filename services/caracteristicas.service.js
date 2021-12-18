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

  async update(id, data) {
    const features = await Features.findByPk(id)
    if (!features) {
      throw boom.notFound("Caracteristicas no encontrada")
    }
    return features.update(data)
  }
}

const featuresService = new FeaturesService()

module.exports = featuresService
