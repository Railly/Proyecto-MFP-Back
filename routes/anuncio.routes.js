const router = require("express").Router()
const validatorHandler = require("../middlewares/validator.handler")
const { createAccommodationSchema } = require("../schemas/alojamiento.schema")
const { BODY } = require("../utils/constants")
const AnnouncementService = require("../services/anuncio.service")
const validateJWT = require("../middlewares/validateJWT.handler")

// User Routes
router.post(
  "/",
  validatorHandler(createAccommodationSchema, BODY),
  validateJWT,
  async (req, res) => {
    const announcement = await AnnouncementService.create(req.body)

    if (!announcement) {
      return res.status(400).send({
        error: "Error al crear el anuncio",
      })
    }

    return res.status(201).send({
      data: announcement,
    })
  }
)

router.get("/", validateJWT, async (req, res) => {
  const announcements = await AnnouncementService.getAll()
  res.status(200).json({
    message: "Los anuncios se han obtenido exitosamente",
    data: {
      anuncios: announcements,
    },
  })
})

module.exports = router
