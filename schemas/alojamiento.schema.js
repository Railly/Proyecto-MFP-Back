const joi = require("joi")

const direccion = joi.string()
const idTipoAlojamiento = joi.number()

const createAccommodationSchema = joi.object({
  alojamiento: joi
    .object({
      direccion: direccion.required(),
      id_tipo_alojamiento: idTipoAlojamiento.required(),
    })
    .required(),
  caracteristicas: joi
    .array()
    .items(
      joi.object({
        descripcion: joi.string().required(),
        cantidad: joi.number().required(),
      })
    )
    .required(),
  anuncio: joi
    .object({
      descripcion: joi.string().required(),
      precio: joi.number().required(),
      nombre: joi.string().required(),
    })
    .required(),
  imagen: joi.string().required(),
})

module.exports = {
  createAccommodationSchema,
}
