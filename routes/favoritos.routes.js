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
  } else {
    res.status(404).send({
      message: "No se ha encontrado el anuncio favorito",
      data: null,
    })
  }
})

router.delete("/", validateJWT, async (req, res) => {
  const { user } = req
  const { id_anuncio } = req.body
  const favorite = await favoritesService.delete({
    id_usuario: user.id,
    id_anuncio: id_anuncio,
  })
  res.status(200).send({
    message: "El anuncio se ha eliminado de favoritos",
    id_favorito: favorite,
  })
})

module.exports = router

// Generatio large documentation for this file

/**
 * @swagger
 * /api/v1/alojamientos:
 *  post:
 *     tags:
 *       - Alojamientos
 *     description: Crea un alojamiento
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: alojamiento
 *         description: alojamiento que se va a crear
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Alojamiento'
 *     responses:
 *       200:
 *         description: alojamiento creado exitosamente
 *         schema:
 *           $ref: '#/definitions/Alojamiento'
 *       400:
 *         description: Error al crear el alojamiento
 *         schema:
 *           $ref: '#/definitions/Error'
 *       401:
 *         description: No autorizado
 *         schema:
 *           $ref: '#/definitions/Error'
 */

/**
 * @swagger
 * /api/v1/alojamientos:
 *   get:
 *     tags:
 *       - Alojamientos
 *     description: Obtiene todos los alojamientos
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: alojamientos obtenidos exitosamente
 *         schema:
 *           $ref: '#/definitions/Alojamiento'
 *       400:
 *         description: Error al obtener los alojamientos
 *         schema:
 *           $ref: '#/definitions/Error'
 *       401:
 *         description: No autorizado
 *         schema:
 *           $ref: '#/definitions/Error'
 */
