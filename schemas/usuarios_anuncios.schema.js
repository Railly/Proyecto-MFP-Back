const joi = require("joi")

const idAnuncio = joi.number().integer().positive()

const createFavoriteSchema = joi.object({
  id_anuncio: idAnuncio.required(),
})

module.exports = {
  createFavoriteSchema,
}
