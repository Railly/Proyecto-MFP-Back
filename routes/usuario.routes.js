const router = require("express").Router()
const bcrypt = require("bcrypt")
const validatorHandler = require("../middlewares/validator.handler")
const {
  getUserSchema,
  createUserSchema,
  loginUserSchema,
  updateUserSchema,
} = require("../schemas/usuario.schema")
const { BODY, PARAMS } = require("../utils/constants")
const UserService = require("../services/usuario.service")

// User Routes
router.post(
  "/login",
  validatorHandler(loginUserSchema, BODY),
  async (req, res) => {
    try {
      const { user, token } = await UserService.login(req.body)
      res.status(200).json({
        token,
        data: user,
        message: "Has iniciado sesión correctamente",
      })
    } catch (error) {
      res.status(404).json({
        error: "Usuario o contraseña incorrectos",
        message: error.message,
      })
    }
  }
)

router.post(
  "/registro",
  validatorHandler(createUserSchema, BODY),
  async (req, res) => {
    const { contraseña } = req.body
    const saltRounds = 10
    const contraseñaHash = await bcrypt.hash(contraseña, saltRounds)

    try {
      const user = await UserService.register({
        ...req.body,
        contraseña: contraseñaHash,
      })
      res.status(200).json({
        message: "El usuario se ha creado correctamente!",
        data: {
          usuario: user,
        },
      })
    } catch (err) {
      res.status(404).json({
        error: "El usuario ya existe",
        message: err.message,
      })
    }
  }
)

router.put(
  "/:id",
  validatorHandler(getUserSchema, PARAMS),
  validatorHandler(updateUserSchema, BODY),
  async (req, res) => {
    let user = null
    try {
      if (req.body.contraseña) {
        console.log("entra")
        const saltRounds = 10
        const contraseñaHash = await bcrypt.hash(
          req.body.contraseña,
          saltRounds
        )
        user = await UserService.updateAccount(req.params.id, {
          contraseña: contraseñaHash,
        })
      } else {
        user = await UserService.updateAccount(req.params.id, req.body)
      }
      res.status(200).json({
        message: "El usuario se ha actualizado correctamente!",
        data: {
          usuario: user,
        },
      })
    } catch (err) {
      res.status(404).json({
        message: "El usuario no se ha podido actualizar",
      })
    }
  }
)

router.delete(
  "/:id",
  validatorHandler(getUserSchema, PARAMS),
  async (req, res) => {
    try {
      const user = await UserService.deleteAccount(req.params.id)
      res.status(200).json({
        message: "El usuario se ha eliminado correctamente!",
        data: {
          usuario: user,
        },
      })
    } catch (err) {
      res.status(404).json({
        message: "El usuario no se ha podido eliminar",
      })
    }
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
