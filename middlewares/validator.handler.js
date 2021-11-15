const boom = require("@hapi/boom")

function validatorHandler(schema, property) {
  return (req, res, next) => {
    console.log("req.body", req.body)
    const data = req[property]
    const { error } = schema.validate(data, { abortEarly: false })
    if (error) {
      next(boom.badRequest(error.details[0].message))
    }
    next()
  }
}

module.exports = validatorHandler
