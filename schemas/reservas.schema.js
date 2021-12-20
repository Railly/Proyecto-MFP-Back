const joi = require("joi")

const fecha_reserva = joi.date()
const fecha_fin = joi.date()
const numero_tarjeta = joi.string()
const fecha_caducidad = joi.date()
const cvv = joi.number()
const id_alojamiento = joi.number()

const createReservationSchema = joi.object().keys({
  fecha_reserva: fecha_reserva.required(),
  fecha_fin: fecha_fin.required(),
  numero_tarjeta: numero_tarjeta.required(),
  fecha_caducidad: fecha_caducidad.required(),
  cvv: cvv.required(),
  id_alojamiento: id_alojamiento.required(),
})

module.exports = {
  createReservationSchema,
}
