const joi = require("joi")

const contenido = joi.string().max(500)
const calificacion = joi.number().integer().positive()
const idAnuncio = joi.number().integer().positive()

const createCommentarySchema = joi.object({
  contenido: contenido.required(),
  calificacion: calificacion.required(),
  id_anuncio: idAnuncio.required(),
})

module.exports = {
  createCommentarySchema,
}
