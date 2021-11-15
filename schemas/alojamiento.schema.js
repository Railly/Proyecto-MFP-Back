const joi = require("joi")

const direccion = joi.string()
const idTipoAlojamiento = joi.number()

const createAccommodationSchema = joi.object({
  direccion: direccion.required(),
  id_tipo_alojamiento: idTipoAlojamiento.required(),
})

module.exports = {
  createAccommodationSchema,
}
