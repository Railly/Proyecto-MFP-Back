const boom = require("@hapi/boom")
const db = require("../models")
const Favorites = db.H_Usuarios_Anuncios
const User = db.H_Usuarios

class FavoritesService {
  async add(data) {
    console.log(data, "data")
    const res = await Favorites.create(data)
    if (!res) {
      throw boom.badRequest("Error al agregarlo a favoritos")
    }
    return res
  }

  async getByUser(userId) {
    const res = User.findByPk(userId, {
      include: [
        {
          association: "favoritos",
          include: ["alojamiento"],
        },
      ],
    })
    if (!res) {
      throw boom.badRequest("Error al obtener los favoritos")
    }
    return res
  }
}

const favoritesService = new FavoritesService()

module.exports = favoritesService
