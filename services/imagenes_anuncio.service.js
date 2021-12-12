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
    return ImgsAnnouncement.findAll()
  }
  async update(id, data) {
    const res = await ImgsAnnouncement.update(data, {
      where: {
        id: id,
      },
    })
    if (!res) {
      throw boom.badRequest("Accommodation not updated")
    }
    return res
  }
}

const accommodationService = new ImgsAnnouncementService()

module.exports = accommodationService
