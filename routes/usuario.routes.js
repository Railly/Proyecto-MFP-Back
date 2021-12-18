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
    try {
      const user = await UserService.updateAccount(req.params.id, req.body)
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
