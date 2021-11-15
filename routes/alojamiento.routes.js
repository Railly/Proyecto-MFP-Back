const router = require("express").Router()
const validatorHandler = require("../middlewares/validator.handler")
const { createAccommodationSchema } = require("../schemas/alojamiento.schema")
const { BODY } = require("../utils/constants")
const AccommodationService = require("../services/alojamiento.service")
const validateJWT = require("../middlewares/validateJWT.handler")

// User Routes
router.post(
  "/",
  validatorHandler(createAccommodationSchema, BODY),
  validateJWT,
  async (req, res) => {
    const { user } = req

    const accommodation = await AccommodationService.create({
      ...req.body,
      id_usuario: user.id,
    })

    if (!accommodation) {
      res.status(400).send({
        error: "Hubo un error al crear el alojamiento",
      })
    }
    res.status(201).json({
      message: "Alojamiento creado exitosamente",
      data: {
        alojamiento: accommodation,
      },
    })
  }
)

router.get("/", async (req, res) => {
  const accommodations = await AccommodationService.getAll()
  res.status(200).json({
    message: "Los alojamientos se han obtenido exitosamente",
    data: {
      alojamientos: accommodations,
    },
  })
})

module.exports = router
