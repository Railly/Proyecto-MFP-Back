const router = require("express").Router()
const validatorHandler = require("../middlewares/validator.handler")
const { BODY } = require("../utils/constants")
const ImgsAnnouncementService = require("../services/imagenes_anuncio.service")
const validateJWT = require("../middlewares/validateJWT.handler")
const {
  createImgsAnnnouncementSchema,
} = require("../schemas/imagenes_anuncio.schema")

// User Routes
router.post(
  "/",
  validatorHandler(createImgsAnnnouncementSchema, BODY),
  validateJWT,
  async (req, res) => {
    const image = await ImgsAnnouncementService.create(req.body)

    if (!image) {
      return res.status(400).send({
        error: "Error al crear la imagen",
      })
    }

    res.send(image)
  }
)

router.get("/", validateJWT, async (req, res) => {
  const images = await ImgsAnnouncementService.getAll()

  if (!images) {
    return res.status(400).send({
      error: "Error al obtener las imagenes",
    })
  }

  res.send(images)
})

module.exports = router
