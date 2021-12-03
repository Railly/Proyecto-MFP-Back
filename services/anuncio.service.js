const db = require("../models")
const Announcement = db.H_Anuncios

class AnnouncementService {
  async getAll() {
    return Announcement.findAll({
      include: ["alojamiento", "imagen"],
    })
  }

  async create(announcement) {
    return Announcement.create(announcement)
  }

  async getAllById(id) {
    return Announcement.findAll({
      where: { id_usuario: id },
      include: ["alojamiento", "imagen"],
    })
  }
}

const announcementService = new AnnouncementService()

module.exports = announcementService
