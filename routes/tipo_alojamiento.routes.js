const router = require("express").Router()
const validateJWT = require("../middlewares/validateJWT.handler")
const AccommodationTypeService = require("../services/tipo_alojamiento.service")

// User Routes
router.get("/", validateJWT, async (req, res) => {
  const accommodationTypes = await AccommodationTypeService.getAll()
  if (!accommodationTypes) {
    res.status(404).send("No hay tipos de alojamiento")
  } else {
    res.status(200).send({
      message: "Tipos de alojamiento encontrados correctamente",
      data: {
        tipos_alojamiento: accommodationTypes,
      },
    })
  }
})

module.exports = router
