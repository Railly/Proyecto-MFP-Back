const joi = require("joi")

const descripcion = joi.string()
const cantidad = joi.number()
const idAlojamiento = joi.number()

const createFeaturesSchema = joi.object({
  descripcion: descripcion.required(),
  cantidad: cantidad.required(),
  id_alojamiento: idAlojamiento.required(),
})

module.exports = {
  createFeaturesSchema,
}
