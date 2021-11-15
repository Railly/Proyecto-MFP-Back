const joi = require("joi")

const descripcion = joi.string()
const precio = joi.number()
const nombre = joi.string()
const idAlojamiento = joi.number()

const createAnnouncementSchema = joi.object().keys({
  descripcion: descripcion.required(),
  precio: precio.required(),
  nombre: nombre.required(),
  id_alojamiento: idAlojamiento.required(),
})

module.exports = {
  createAnnouncementSchema,
}
