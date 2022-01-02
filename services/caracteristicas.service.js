require("dotenv").config()
const db = require("../models")
const Features = db.H_Caracteristicas

class FeaturesService {
  async create(data) {
    return Features.bulkCreate(data)
  }

  async update(id, data) {
    const features = await Features.findByPk(id)
    return features.update(data)
  }
}

const featuresService = new FeaturesService()

module.exports = featuresService
