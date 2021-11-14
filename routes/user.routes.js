const express = require("express")
const router = express.Router()

const UserService = require("../services/user.service")

// User Routes
// router.get("/", UserService.findAll)
router.post("/login", UserService.login)
router.post("/register", UserService.register)
router.put("/:id", UserService.updateAccount)
router.delete("/:id", UserService.deleteAccount)

module.exports = router
