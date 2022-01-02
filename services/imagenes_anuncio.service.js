const db = require("../models")
const ImgsAnnouncement = db.H_Imagenes_para_Anuncios

class ImgsAnnouncementService {
  async create(data) {
    return ImgsAnnouncement.create(data)
  }

  async getAll() {
    return ImgsAnnouncement.findAll()
  }
  async update(id, data) {
    return ImgsAnnouncement.update(data, {
      where: {
        id: id,
      },
    })
  }
}

const accommodationService = new ImgsAnnouncementService()

module.exports = accommodationService
