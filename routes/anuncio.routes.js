const router = require("express").Router()
const validatorHandler = require("../middlewares/validator.handler")
const { BODY } = require("../utils/constants")
const AnnouncementService = require("../services/anuncio.service")
const validateJWT = require("../middlewares/validateJWT.handler")
const { createAnnouncementSchema } = require("../schemas/anuncio.schema")

// User Routes
router.post(
  "/",
  validatorHandler(createAnnouncementSchema, BODY),
  validateJWT,
  async (req, res) => {
    const announcement = await AnnouncementService.create(req.body)
    return res.status(200).send({
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

router.get("/:id", validateJWT, async (req, res) => {
  const announcements = await AnnouncementService.getAllById(req.params.id)
  res.status(200).json({
    message: "El anuncio se ha obtenido exitosamente",
    data: {
      anuncios: announcements,
    },
  })
})

module.exports = router
