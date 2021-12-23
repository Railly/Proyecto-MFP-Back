const joi = require("joi")

// Required fields
const nombre = joi.string().min(3).max(100)
const apellidos = joi.string().min(3).max(45)
const correo = joi.string().email()
const contraseña = joi.string().min(8).max(45)
const telefono = joi.string().length(9)

// Optional fields
const fechaNacimiento = joi.date()
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
  telefono: telefono.required(),
})

const updateUserSchema = joi.object({
  nombre: nombre,
  apellidos: apellidos,
  correo: correo,
  contraseña: contraseña,
  fecha_nacimiento: fechaNacimiento,
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
