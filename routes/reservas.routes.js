const router = require("express").Router()
const validatorHandler = require("../middlewares/validator.handler")
const { BODY } = require("../utils/constants")
const ReservationService = require("../services/reservas.service")
const validateJWT = require("../middlewares/validateJWT.handler")
const { createReservationSchema } = require("../schemas/reservas.schema")

// User Routes
router.post(
  "/",
  validatorHandler(createReservationSchema, BODY),
  validateJWT,
  async (req, res) => {
    const { id } = req.user
    const reservation = await ReservationService.create({
      ...req.body,
      id_usuario: id,
    })

    if (!reservation) {
      return res.status(400).send({
        error: "Error al crear la reserva",
      })
    }

    res.status(201).send({
      data: reservation,
      message: "Reserva creada con éxito",
      ok: true,
    })
  }
)

router.get("/", validateJWT, async (req, res) => {
  console.log(req.user)
  const { id } = req.user
  const reservation = await ReservationService.getByUser(id)

  if (!reservation) {
    return res.status(400).send({
      error: "Error al obtener las imagenes",
    })
  }

  res.status(200).send({
    data: reservation,
    message: "Reservas obtenidas con éxito",
    ok: true,
  })
})

module.exports = router
