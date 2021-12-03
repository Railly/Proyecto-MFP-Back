require("dotenv").config()
const boom = require("@hapi/boom")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const db = require("../models")
const User = db.H_Usuarios

class UserService {
  async register(data) {
    return User.create(data)
  }

  async login(data) {
    const user = await User.findOne({
      where: {
        correo: data.correo,
      },
    })

    const passwordIsValid =
      user === null
        ? false
        : await bcrypt.compare(data.contraseña, user.contraseña)

    if (!user || !passwordIsValid) {
      throw boom.notFound("Ususario o contraseña incorrectos")
    }

    const token = jwt.sign(
      { id: user.id, correo: user.correo },
      process.env.JWT_SECRET
    )

    return {
      user,
      token,
    }
  }

  async findOne(id) {
    const user = await User.findByPk(id)
    if (!user) {
      throw boom.notFound("Usuario no encontrado")
    }
    return user
  }

  async updateAccount(id, data) {
    const user = await this.findOne(id)
    return user.update(data)
  }

  async deleteAccount(id) {
    const user = await this.findOne(id)
    await user.destroy()
    return { id }
  }
}

const userService = new UserService()

module.exports = userService
