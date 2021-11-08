const express = require("express")
const router = express.Router()

const UserController = require("../controllers/user.controller")

// User Routes
// router.get("/", UserController.findAll)
router.get("/", UserController.login)
router.post("/", UserController.register)
router.put("/:id", UserController.updateAccount)
router.delete("/:id", UserController.deleteAccount)

module.exports = router
