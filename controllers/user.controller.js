const db = require("../models")
const User = db.User

// Create and Save a new User
exports.create = (req, res) => {
  // Validate request
  if (
    !req.body.firstName ||
    !req.body.lastName ||
    !req.body.email ||
    !req.body.password
  ) {
    res.status(400).send({
      message: "All user fields are required",
    })
  }
  // Create a User
  const user = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  }

  User.create(user)
    .then((data) => {
      res.json({
        message: "User created successfully!",
        data,
      })
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      })
    })
}

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
  // const email = req.query.email
  // const condition = email ? { email: { [Op.like]: `%${email}%` } } : null
  // User.findAll({ where: condition })

  User.findAll()
    .then((data) => {
      res.json({
        message: "Users retrieved successfully!",
        data,
      })
    })
    .catch((err) => {
      console.log(err.message)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving users.",
      })
    })
}

// Find a single User with an id
exports.findOne = (req, res) => {
  const { id } = req.params

  User.findByPk(id)
    .then((data) => {
      res.json({
        message: "User retrieved successfully!",
        data,
      })
    })
    .catch((err) => {
      console.log(err.message)
      res.status(500).send({
        message: err.message || `Error retrieving User with id=${id}`,
      })
    })
}

// Update a User by the id in the request
exports.update = (req, res) => {}

// Delete a User with the specified id in the request
exports.delete = (req, res) => {}

// Delete all Users from the database.
exports.deleteAll = (req, res) => {}

// Find all published Users
exports.findAllPublished = (req, res) => {}
