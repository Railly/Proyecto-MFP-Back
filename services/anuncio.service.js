const db = require("../models")
const Announcement = db.H_Anuncios

class AnnouncementService {
  async getAll() {
    return Announcement.findAll({
      include: [
        "alojamiento",
        "imagen",
        {
          association: "comentarios",
          attributes: ["calificacion"],
        },
      ],
    })
  }

  async create(announcement) {
    return Announcement.create(announcement)
  }

  async getAllById(id) {
    return Announcement.findAll({
      where: { id_alojamiento: id },
      include: ["alojamiento", "imagen", "comentarios"],
    })
  }

  async update(id, announcement) {
    const announcementToUpdate = await Announcement.findByPk(id)
    return announcementToUpdate.update(announcement)
  }
}

const announcementService = new AnnouncementService()

module.exports = announcementService
