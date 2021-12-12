const router = require("express").Router()
const validatorHandler = require("../middlewares/validator.handler")
const { createAccommodationSchema } = require("../schemas/alojamiento.schema")
const { BODY } = require("../utils/constants")
const AccommodationService = require("../services/alojamiento.service")
const validateJWT = require("../middlewares/validateJWT.handler")
const FeaturesService = require("../services/caracteristicas.service")
const ImgsAnnouncementService = require("../services/imagenes_anuncio.service")
const AnnouncementService = require("../services/anuncio.service")
const { cloudinaryImageUpload } = require("../utils/cloudinaryImageUpload")

// User Routes
router.post("/", validateJWT, async (req, res) => {
  const { user } = req
  console.log(req.body, "req.bodyyyyyyyyyyyyyyyy")
  console.log(req.files, "req.files")
  const imgUrl = await cloudinaryImageUpload(req.files.imagen)
  console.log(imgUrl, "imgUrl")

  const accommodation = await AccommodationService.create({
    direccion: req.body["alojamiento[direccion]"],
    id_tipo_alojamiento: req.body["alojamiento[id_tipo_alojamiento]"],
    id_usuario: user.id,
  })

  const { id: alojamientoId } = accommodation
  const caracteristicas = Array.from(
    {
      length: 5,
    },
    (v, i) => {
      return {
        descripcion: req.body[`caracteristicas[${i}][descripcion]`],
        cantidad: req.body[`caracteristicas[${i}][cantidad]`],
      }
    }
  )

  const caracteristicasArr = caracteristicas.map((caracteristica) => ({
    ...caracteristica,
    id_alojamiento: alojamientoId,
  }))

  const car = await FeaturesService.create(caracteristicasArr)

  const announcement = await AnnouncementService.create({
    descripcion: req.body["anuncio[descripcion]"],
    nombre: req.body["anuncio[nombre]"],
    precio: req.body["anuncio[precio]"],
    id_alojamiento: alojamientoId,
  })

  const { id: anuncioId } = announcement

  const img = ImgsAnnouncementService.create({
    imagen: imgUrl,
    id_anuncio: anuncioId,
  })

  res.status(200).json({
    message: "Alojamiento creado exitosamente",
    ok: true,
    data: {
      anuncio: announcement,
      alojamiento: accommodation,
      caracteristicas: car,
      imagen: img,
    },
  })
})

router.get("/", validateJWT, async (req, res) => {
  const accommodations = await AccommodationService.getAll()
  res.status(200).json({
    message: "Los alojamientos se han obtenido exitosamente",
    data: {
      alojamientos: accommodations,
    },
  })
})

router.get("/:id", validateJWT, async (req, res) => {
  const { id } = req.params
  const accommodation = await AccommodationService.getById(id)
  res.status(200).json({
    message: "El alojamiento se ha obtenido exitosamente",
    data: {
      alojamientos: accommodation,
    },
  })
})

router.put(
  "/:id",
  validatorHandler(createAccommodationSchema, BODY),
  validateJWT,
  async (req, res) => {
    const { id } = req.params
    const { user } = req
    // delete the accommodation
    await AccommodationService.delete(id)

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
      imagen: req.body.imagen,
      id_anuncio: anuncioId,
    })

    res.status(200).json({
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

router.delete("/:id", validateJWT, async (req, res) => {
  const { id } = req.params
  await AccommodationService.delete(id)
  res.status(200).json({
    message: "El alojamiento se ha eliminado exitosamente",
  })
})

module.exports = router
