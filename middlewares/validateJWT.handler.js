require("dotenv").config()
const boom = require("@hapi/boom")
const jwt = require("jsonwebtoken")

function validateJWT(req, res, next) {
  const token = req.get("Authorization")
  console.log(token)
  if (token && token.startsWith("Bearer ")) {
    const jwtToken = token.slice(7, token.length)
    try {
      const decoded = jwt.verify(jwtToken, process.env.JWT_SECRET)
      req.user = decoded
      next()
    } catch (error) {
      next(error)
    }
  } else {
    next(boom.unauthorized("El token no es válido"))
  }
}

module.exports = validateJWT
