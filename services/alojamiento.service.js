const db = require("../models")
const Accommodation = db.H_Alojamientos

class AccommodationService {
  async getAll() {
    return Accommodation.findAll({
      include: [
        {
          association: "usuario",
          attributes: ["id", "nombre", "apellidos"],
        },
        "caracteristica",
        "tipo_alojamiento",
      ],
    })
  }

  async create(accommodation) {
    return Accommodation.create(accommodation)
  }

  async delete(id) {
    const accommodation = await Accommodation.findByPk(id)
    return accommodation.destroy()
  }

  async getById(id) {
    return Accommodation.findOne({
      where: {
        id,
      },
      include: [
        {
          association: "usuario",
          attributes: ["id", "nombre", "apellidos"],
        },
        "caracteristica",
        "tipo_alojamiento",
        {
          association: "anuncio",
          include: [
            "imagen",
            {
              association: "comentarios",
              include: [
                {
                  association: "usuario",
                  attributes: ["id", "nombre", "apellidos"],
                },
              ],
            },
          ],
        },
      ],
    })
  }

  async update(id, accommodation) {
    const accommodationToUpdate = await Accommodation.findByPk(id)
    return accommodationToUpdate.update(accommodation)
  }
}

const accommodationService = new AccommodationService()

module.exports = accommodationService
