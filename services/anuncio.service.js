const db = require("../models")
const Announcement = db.H_Anuncios

class AnnouncementService {
  async getAll() {
    const announcement = await Announcement.findAll({
      include: ["alojamiento", "imagen"],
    })
    return announcement
  }

  async create(announcement) {
    const newAnnouncement = await Announcement.create(announcement)
    return newAnnouncement
  }

  async getAllById(id) {
    const announcement = await Announcement.findAll({
      where: { id_usuario: id },
      include: ["alojamiento", "imagen"],
    })
    return announcement
  }
}

const announcementService = new AnnouncementService()

module.exports = announcementService
