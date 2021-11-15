const joi = require("joi")

const imagen = joi.binary().encoding("base64")
const idAnuncio = joi.number().integer().positive()

const createImgsAnnnouncementSchema = joi.object({
  imagen: imagen.required(),
  id_anuncio: idAnuncio.required(),
})

module.exports = {
  createImgsAnnnouncementSchema,
}
