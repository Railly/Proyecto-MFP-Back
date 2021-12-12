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
    console.log(id, "id")
    console.log(data, "data")
    const features = await Features.findByPk(id)
    if (!features) {
      throw boom.notFound("Caracteristicas no encontrada")
    }
    const updatedFeatures = await features.update(data)
    return updatedFeatures
  }
}

const featuresService = new FeaturesService()

module.exports = featuresService
