const router = require("express").Router()
const validatorHandler = require("../middlewares/validator.handler")
const { BODY } = require("../utils/constants")
const favoritesService = require("../services/favoritos.service")
const validateJWT = require("../middlewares/validateJWT.handler")
const { createFavoriteSchema } = require("../schemas/usuarios_anuncios.schema")

router.post(
  "/",
  validatorHandler(createFavoriteSchema, BODY),
  validateJWT,
  async (req, res) => {
    const { user } = req
    const { id_anuncio } = req.body
    const favorite = await favoritesService.add({
      id_usuario: user.id,
      id_anuncio: id_anuncio,
    })
    res.status(200).send({
      message: "El anuncio se ha agregado a favoritos",
      data: favorite,
    })
  }
)

router.get("/", validateJWT, async (req, res) => {
  const { user } = req
  const userFavorites = await favoritesService.getByUser(user.id)
  res.status(200).send({
    message: "Se han obtenido los anuncios favoritos",
    data: userFavorites.favoritos,
  })
})

router.get("/:id", validateJWT, async (req, res) => {
  const { user } = req
  const { id } = req.params
  const favorite = await favoritesService.getById({
    id_usuario: user.id,
    id_anuncio: id,
  })
  if (favorite) {
    res.status(200).send({
      message: "Se ha obtenido el anuncio favorito",
      data: favorite,
    })
  }
  res.status(404).send({
    message: "No se ha encontrado el anuncio favorito",
    data: null,
  })
})

router.delete("/", validateJWT, async (req, res) => {
  const { user } = req
  const { id_anuncio } = req.body
  try {
    const favorite = await favoritesService.delete({
      id_usuario: user.id,
      id_anuncio: id_anuncio,
    })
    res.status(200).send({
      message: "El anuncio se ha eliminado de favoritos",
      id_favorito: favorite,
    })
  } catch (err) {
    res.status(400).send({
      message: "El anuncio no se ha eliminado de favoritos",
      data: err,
    })
  }
})

module.exports = router
