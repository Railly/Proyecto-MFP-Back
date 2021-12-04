const router = require("express").Router()
const validatorHandler = require("../middlewares/validator.handler")
const { BODY } = require("../utils/constants")
const favoritesService = require("../services/favoritos.service")
const validateJWT = require("../middlewares/validateJWT.handler")
const { createFavoriteSchema } = require("../schemas/usuarios_anuncios.schema")

// User Routes
router.post(
  "/",
  validatorHandler(createFavoriteSchema, BODY),
  validateJWT,
  async (req, res) => {
    const { user } = req
    const { id_anuncio } = req.body
    try {
      const favorite = await favoritesService.add({
        id_usuario: user.id,
        id_anuncio: id_anuncio,
      })
      res.status(201).send({
        message: "El anuncio se ha agregado a favoritos",
        data: favorite,
      })
    } catch (error) {
      res.status(400).send({
        message: "El anuncio no se ha podido agregar a favoritos",
        data: error,
      })
    }
  }
)

router.get("/", validateJWT, async (req, res) => {
  const { user } = req
  try {
    const userFavorites = await favoritesService.getByUser(user.id)
    res.status(200).send({
      message: "Se han obtenido los anuncios favoritos",
      data: userFavorites.favoritos,
    })
  } catch (error) {
    res.status(400).send({
      message: "No se pudo obtener la lista de favoritos",
      data: error,
    })
  }
})

module.exports = router
