const boom = require("@hapi/boom")
const db = require("../models")
const User = db.User

class UserService {
  async register(data) {
    const user = await User.create(data)
    return user
  }

  async login(data) {
    const user = await User.findOne({
      where: {
        correo: data.correo,
        contraseña: data.contraseña,
      },
    })
    if (!user) {
      throw boom.notFound("Ususario o contraseña incorrectos")
    }
    return user
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
    const res = await user.update(data)
    return res
  }

  async deleteAccount(id) {
    const user = await this.findOne(id)
    await user.destroy()
    return { id }
  }
}

const userService = new UserService()

module.exports = userService
