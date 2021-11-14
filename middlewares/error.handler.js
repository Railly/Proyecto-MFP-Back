const { ValidationError } = require("sequelize")

function logError(err, req, res, next) {
  console.log(err)
  next(err)
}

function errorHandler(err, req, res, next) {
  res.status(500).send({ message: err.message, stack: err.stack })
}

function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    const error = err.output
    res.status(error.statusCode).send(error.payload)
  }
  next(err)
}

function ormErrorHandler(err, req, res, next) {
  if (err instanceof ValidationError) {
    res.status(409).json({
      statusCode: 409,
      message: err.name,
      errors: err.errors,
    })
  }
  next(err)
}

module.exports = {
  logError,
  errorHandler,
  boomErrorHandler,
  ormErrorHandler,
}
