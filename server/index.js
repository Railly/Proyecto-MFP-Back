const express = require("express")
const cors = require("cors")
const fileUpload = require("express-fileupload")

const {
  logError,
  boomErrorHandler,
  errorHandler,
  ormErrorHandler,
} = require("../middlewares/error.handler")

class Server {
  constructor() {
    this.port = process.env.PORT || 3000
    this.app = express()
    this.middleware()
    this.routes()
  }

  middleware() {
    this.app.use(express.json())
    this.app.use(
      cors({
        origin: [
          "http://localhost:3000",
          "https://proyecto-mfp-front.vercel.app/",
        ],
      })
    )
    this.app.use(express.urlencoded({ extended: false }))
    this.app.use(
      fileUpload({
        limits: { fileSize: 50 * 1024 * 1024 },
      })
    )
    this.app.use(logError)
    this.app.use(ormErrorHandler)
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

// describe the server clase and methods

// @returns {void}
// @param {void}
// @description
// @class Server
// @method middleware
// @method routes
// @method listen
// @method constructor
