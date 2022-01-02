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

    return res.status(200).send({
      message: "Caracteristicas creadas correctamente",
      data: {
        caracteristicas: createdFeatures,
      },
    })
  }
)

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

/**
 * @swagger
 * /api/v1/alojamientos/{id}:
 *   get:
 *     tags:
 *       - Alojamientos
 *     description: Obtiene un alojamiento
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: id del alojamiento
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: alojamiento obtenido exitosamente
 *         schema:
 *           $ref: '#/definitions/Alojamiento'
 *       400:
 *         description: Error al obtener el alojamiento
 *         schema:
 *           $ref: '#/definitions/Error'
 *       401:    parameters:
 *        description: No autorizado
 *        schema:
 *         $ref: '#/definitions/Error'
 *      404:
 *       description: No se encontró el alojamiento
 *      schema:
 *      $ref: '#/definitions/Error'
 *  put:
 *     - Alojamientos
 *    description: Actualiza un alojamiento
 *    produces:
 *      - application/json
 *    parameters:
 *      - name: id
 *        description: id del alojamiento
 *        in: path
 *        required: true
 *        type: string
 *      - name: alojamiento
 *        description: alojamiento que se va a actualizar
 *        in: body
 *        required: true
 *        schema:
 *          $ref: '#/definitions/Alojamiento'
 *    responses:
 *      200:
 *        description: alojamiento actualizado exitosamente
 *        schema:
 *          $ref: '#/definitions/Alojamiento'
 *      400:
 *        description: Error al actualizar el alojamiento
 *        schema:
 *          $ref: '#/definitions/Error'
 *      401:
 *        description: No autorizado
 *        schema:
 *          $ref: '#/definitions/Error'
 *  delete:
 *    tags:
 *      - Alojamientos
 *    description: Elimina un alojamiento
 *    produces:
 *      - application/json
 *    parameters:
 *      - name: id
 *        description: id del alojamiento
 *        in: path
 *        required: true
 *        type: string
 *    responses:
 *      200:
 *        description: alojamiento eliminado exitosamente
 *      400:
 *        description: Error al eliminar el alojamiento
 *        schema:
 *          $ref: '#/definitions/Error'
 *      401:
 *        description: No autorizado
 *        schema:
 *          $ref: '#/definitions/Error'
 */
