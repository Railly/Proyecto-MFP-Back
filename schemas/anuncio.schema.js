const joi = require("joi")

const descripcion = joi.string()
const precio = joi.number()
const nombre = joi.string()

const createAnnouncementSchema = joi.object().keys({
  descripcion: descripcion.required(),
  precio: precio.required(),
  nombre: nombre.required(),
})

module.exports = {
  createAnnouncementSchema,
}
