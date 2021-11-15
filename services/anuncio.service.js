const db = require("../models")
const Announcement = db.H_Anuncios

class AnnouncementService {
  async getAll() {
    const announcement = await Announcement.findAll({
      include: ["alojamiento"],
    })
    return announcement
  }
}

const announcementService = new AnnouncementService()

module.exports = announcementService
