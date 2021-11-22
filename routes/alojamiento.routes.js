const router = require("express").Router()
const validatorHandler = require("../middlewares/validator.handler")
const { createAccommodationSchema } = require("../schemas/alojamiento.schema")
const { BODY } = require("../utils/constants")
const AccommodationService = require("../services/alojamiento.service")
const validateJWT = require("../middlewares/validateJWT.handler")
const FeaturesService = require("../services/caracteristicas.service")
const ImgsAnnouncementService = require("../services/imagenes_anuncio.service")
const AnnouncementService = require("../services/anuncio.service")

// User Routes
router.post(
  "/",
  validatorHandler(createAccommodationSchema, BODY),
  validateJWT,
  async (req, res) => {
    const { user } = req
    console.log(req.body)

    const accommodation = await AccommodationService.create({
      ...req.body.alojamiento,
      id_usuario: user.id,
    })

    const { id: alojamientoId } = accommodation

    const caracteristicasArr = req.body.caracteristicas.map(
      (caracteristica) => ({
        ...caracteristica,
        id_alojamiento: alojamientoId,
      })
    )

    const car = await FeaturesService.create(caracteristicasArr)

    const announcement = await AnnouncementService.create({
      ...req.body.anuncio,
      id_alojamiento: alojamientoId,
    })

    const { id: anuncioId } = announcement

    const img = ImgsAnnouncementService.create({
      ...req.body.imagen,
      id_anuncio: anuncioId,
    })

    if (!accommodation) {
      res.status(400).send({
        error: "Hubo un error al crear el alojamiento",
      })
    }

    res.status(201).json({
      message: "Alojamiento creado exitosamente",
      data: {
        anuncio: announcement,
        alojamiento: accommodation,
        caracteristicas: car,
        imagen: img,
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
