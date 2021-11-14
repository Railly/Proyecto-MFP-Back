const joi = require("joi")

// Required fields
const nombre = joi.string().min(3).max(100)
const apellidos = joi.string().min(3).max(45)
const correo = joi.string().email()
const contraseña = joi.string().min(8).max(45)

// Optional fields
const fechaNacimiento = joi.date().timestamp()
const direccion = joi.string().min(3).max(45)
const imagen = joi.binary().encoding("base64")
const DNI = joi.string().min(8).max(10)
const sexo = joi.boolean()

// Schema
const createUserSchema = joi.object({
  nombre: nombre.required(),
  apellidos: apellidos.required(),
  correo: correo.required(),
  contraseña: contraseña.required(),
})

const updateUserSchema = joi.object({
  nombre: nombre,
  apellidos: apellidos,
  correo: correo,
  contraseña: contraseña,
  fechaNacimiento: fechaNacimiento,
  direccion: direccion,
  imagen: imagen,
  DNI: DNI,
  sexo: sexo,
})

const getUserSchema = joi.object({
  id: joi.string().required(),
})

const loginUserSchema = joi.object({
  correo: correo.required(),
  contraseña: contraseña.required(),
})

module.exports = {
  createUserSchema,
  loginUserSchema,
  updateUserSchema,
  getUserSchema,
}
