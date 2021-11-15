require("dotenv").config()
const jwt = require("jsonwebtoken")
const boom = require("@hapi/boom")
const router = require("express").Router()
const validatorHandler = require("../middlewares/validator.handler")
const { createAccommodationSchema } = require("../schemas/alojamiento.schema")
const { BODY, PARAMS } = require("../utils/constants")
const AccommodationService = require("../services/alojamiento.service")

// User Routes
router.post(
  "/",
  validatorHandler(createAccommodationSchema, BODY),
  async (req, res) => {
    const authorization = req.get("authorization")
    const token = authorization && authorization.split(" ")[1]
    console.log(token)
    let decodedToken = null
    try {
      decodedToken = jwt.verify(token, process.env.JWT_SECRET)
    } catch (err) {
      res.status(401).send({
        error: "Token inválido",
      })
    }
    const { id } = decodedToken

    const accommodation = await AccommodationService.create({
      ...req.body,
      id_usuario: id,
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

module.exports = router
