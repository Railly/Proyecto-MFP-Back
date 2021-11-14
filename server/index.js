const express = require("express")
const cors = require("cors")
const {
  logError,
  boomErrorHandler,
  errorHandler,
} = require("../middlewares/error.handler")

class Server {
  constructor() {
    this.port = process.env.PORT || 3000
    this.app = express()
    this.app.use(express.json())
    this.app.use(cors())
    this.routes()
    this.middleware()
  }

  middleware() {
    this.app.use(logError)
    this.app.use(boomErrorHandler)
    this.app.use(errorHandler)
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
