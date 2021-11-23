const boom = require("@hapi/boom")
const db = require("../models")
const ImgsAnnouncement = db.H_Imagenes_para_Anuncios

class ImgsAnnouncementService {
  async create(data) {
    const res = await ImgsAnnouncement.create(data)
    if (!res) {
      throw boom.badRequest("Accommodation not created")
    }
    return res
  }

  async getAll() {
    const res = await ImgsAnnouncement.findAll()
    return res
  }
}

const accommodationService = new ImgsAnnouncementService()

module.exports = accommodationService
