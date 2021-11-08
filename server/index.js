const express = require("express")

class Server {
  constructor() {
    this.port = process.env.PORT || 3000
    this.app = express()
    this.app.use(express.json())
    this.routes()
  }

  routes() {
    this.app.use("/api", require("../routes/index"))
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`)
    })
  }
}

module.exports = Server
