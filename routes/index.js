const express = require("express")
const router = express.Router()

const user = require("./usuario.routes")
const accommodationType = require("./tipo_alojamiento.routes")
const accommodation = require("./alojamiento.routes")

router.use("/usuarios", user)
router.use("/tipo_alojamiento", accommodationType)
router.use("/alojamiento", accommodation)

module.exports = router
