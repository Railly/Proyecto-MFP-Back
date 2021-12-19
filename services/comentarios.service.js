const boom = require("@hapi/boom")
const db = require("../models")
const Commentaries = db.H_Comentarios

class CommentariesService {
  async create(data) {
    const res = await Commentaries.create(data)
    if (!res) {
      throw boom.badRequest("Commentary not created")
    }
    return res
  }
}

const commentariesService = new CommentariesService()

module.exports = commentariesService
