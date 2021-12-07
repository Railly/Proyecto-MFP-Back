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

  async delete(data) {
    const res = await Favorites.destroy({
      where: {
        id_usuario: data.id_usuario,
        id_anuncio: data.id_anuncio,
      },
    })
    if (!res) {
      throw boom.badRequest("Error al eliminar favorito")
    }
    return res
  }

  async getById(data) {
    const res = Favorites.findOne({
      where: {
        id_usuario: data.id_usuario,
        id_anuncio: data.id_anuncio,
      },
    })
    if (!res) {
      throw boom.badRequest("Error al obtener favorito")
    }
    return res
  }
}

const favoritesService = new FavoritesService()

module.exports = favoritesService
