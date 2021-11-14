const router = require("express").Router()
const bcrypt = require("bcrypt")
const validatorHandler = require("../middlewares/validator.handler")
const {
  getUserSchema,
  createUserSchema,
  loginUserSchema,
  updateUserSchema,
} = require("../schemas/user.schema")
const { BODY, PARAMS } = require("../utils/constants")
const UserService = require("../services/user.service")

// User Routes
router.post(
  "/login",
  validatorHandler(loginUserSchema, BODY),
  async (req, res) => {
    const { user, token } = await UserService.login(req.body)
    if (!user) {
      res.status(401).json({
        message: "El correo o la contraseña son incorrectos",
      })
    } else {
      res.status(200).json({
        token,
        message: "Has iniciado sesión correctamente",
      })
    }
  }
)

router.post(
  "/register",
  validatorHandler(createUserSchema, BODY),
  async (req, res, next) => {
    const { contraseña } = req.body
    const saltRounds = 10
    const contraseñaHash = await bcrypt.hash(contraseña, saltRounds)

    try {
      const user = await UserService.register({
        ...req.body,
        contraseña: contraseñaHash,
      })
      res.status(201).json({
        message: "El usuario se ha creado correctamente!",
        user,
      })
    } catch (err) {
      next(err)
    }
  }
)

router.put(
  "/:id",
  validatorHandler(getUserSchema, PARAMS),
  validatorHandler(updateUserSchema, BODY),
  async (req, res, next) => {
    try {
      const user = await UserService.updateAccount(req.params.id, req.body)
      res.status(200).json({
        message: "El usuario se ha actualizado correctamente!",
        user,
      })
    } catch (err) {
      next(err)
    }
  }
)

router.delete(
  "/:id",
  validatorHandler(getUserSchema, PARAMS),
  async (req, res, next) => {
    try {
      const user = await UserService.deleteAccount(req.params.id)
      res.status(200).json({
        message: "El usuario se ha eliminado correctamente!",
        user,
      })
    } catch (err) {
      next(err)
    }
  }
)

module.exports = router
