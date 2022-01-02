const db = require("../models")
const Commentaries = db.H_Comentarios

class CommentariesService {
  async create(data) {
    return Commentaries.create(data)
  }
}

const commentariesService = new CommentariesService()

module.exports = commentariesService
