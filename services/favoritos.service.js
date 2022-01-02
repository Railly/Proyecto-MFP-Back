const db = require("../models")
const Favorites = db.H_Usuarios_Anuncios
const User = db.H_Usuarios

class FavoritesService {
  async add(data) {
    return Favorites.create(data)
  }

  async getByUser(userId) {
    return User.findByPk(userId, {
      include: [
        {
          association: "favoritos",
          include: ["alojamiento"],
        },
      ],
    })
  }

  async delete(data) {
    return Favorites.destroy({
      where: {
        id_anuncio: data.id_anuncio,
      },
    })
  }

  async getById(data) {
    return Favorites.findOne({
      where: {
        id_usuario: data.id_usuario,
        id_anuncio: data.id_anuncio,
      },
    })
  }
}

const favoritesService = new FavoritesService()

module.exports = favoritesService
