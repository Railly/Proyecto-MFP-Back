const router = require("express").Router()
const validatorHandler = require("../middlewares/validator.handler")
const { BODY } = require("../utils/constants")
const FeaturesService = require("../services/caracteristicas.service")
const validateJWT = require("../middlewares/validateJWT.handler")
const { createFeaturesSchema } = require("../schemas/caracteristicas.schema")

// User Routes
router.post(
  "/",
  validatorHandler(createFeaturesSchema, BODY),
  validateJWT,
  async (req, res) => {
    const { body: features } = req
    const createdFeatures = await FeaturesService.create(features)
    if (!createdFeatures) {
      return res.status(400).send({
        error: "Error al crear las caracteristicas",
      })
    }
    return res.status(201).send({
      message: "Caracteristicas creadas correctamente",
      data: {
        caracteristicas: createdFeatures,
      },
    })
  }
)

module.exports = router
