const router = require("express").Router()
const validatorHandler = require("../middlewares/validator.handler")
const { BODY } = require("../utils/constants")
const CommentariesService = require("../services/comentarios.service")
const validateJWT = require("../middlewares/validateJWT.handler")
const { createCommentarySchema } = require("../schemas/comentarios.schema")

// Commentary Routes
router.post(
  "/",
  validatorHandler(createCommentarySchema, BODY),
  validateJWT,
  async (req, res) => {
    const commentary = await CommentariesService.create(req.body)

    if (!commentary) {
      return res.status(400).send({
        error: "Error creating commentary",
      })
    }
    res.status(201).send({
      ok: true,
      message: "Commentary created",
      commentary,
    })
  }
)

module.exports = router
