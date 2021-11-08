const db = require("../models")
const User = db.User

class UserController {
  register(req, res) {
    User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    })
      .then((user) => {
        res.status(201).json({
          message: "User created successfully!",
          user,
        })
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the User.",
        })
      })
  }

  login(req, res) {
    User.findOne({
      where: {
        email: req.body.email,
        password: req.body.password,
      },
    })
      .then((user) => {
        console.log(user, "user")
        if (!user) {
          res.status(401).json({
            message: "Invalid email or password!",
          })
        } else {
          res.status(200).json({
            message: "Login successful!",
            user,
          })
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while logging in.",
        })
      })
  }

  updateAccount(req, res) {
    User.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
      .then((num) => {
        if (+num === 1) {
          res.status(200).json({
            message: "User updated successfully!",
          })
        } else {
          res.status(404).json({
            message: `User not found!`,
          })
        }
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while updating the User.",
        })
      })
  }

  deleteAccount(req, res) {
    User.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((num) => {
        if (+num === 1) {
          res.status(200).json({
            message: "User deleted successfully!",
          })
        } else {
          res.status(404).json({
            message: `User not found!`,
          })
        }
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while deleting the User.",
        })
      })
  }
}
const userController = new UserController()

module.exports = userController

// // Create a new user
// exports.create = (req, res) => {
//   // Validate requesjt
//   if (
//     !req.body.firstName ||
//     !req.body.lastName ||
//     !req.body.email ||
//     !req.body.password
//   ) {
//     res.status(400).send({
//       message: "All user fields are required",
//     })
//   }
//   // Create a User
//   const user = {
//     firstName: req.body.firstName,
//     lastName: req.body.lastName,
//     email: req.body.email,
//     password: req.body.password,
//   }

//   User.create(user)
//     .then((data) => {
//       res.status(201).json({
//         message: "User created successfully!",
//         data,
//       })
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: err.message || "Some error occurred while creating the User.",
//       })
//     })
// }

// // Retrieve all Users
// exports.findAll = (req, res) => {
//   // const email = req.query.email
//   // const condition = email ? { email: { [Op.like]: `%${email}%` } } : null
//   // User.findAll({ where: condition })

//   User.findAll()
//     .then((data) => {
//       res.json({
//         message: "Users retrieved successfully!",
//         data,
//       })
//     })
//     .catch((err) => {
//       console.log(err.message)
//       res.status(500).send({
//         message: err.message || "Some error occurred while retrieving users.",
//       })
//     })
// }

// // Find a single User by id
// exports.findOne = (req, res) => {
//   const { id } = req.params

//   User.findByPk(id)
//     .then((data) => {
//       res.json({
//         message: "User retrieved successfully!",
//         data,
//       })
//     })
//     .catch((err) => {
//       console.log(err.message)
//       res.status(500).send({
//         message: err.message || `Error retrieving User with id=${id}`,
//       })
//     })
// }

// // Update a User by id
// exports.update = (req, res) => {
//   const { id } = req.params

//   User.update(req.body, {
//     where: { id },
//   }).then((num) => {
//     if (+num === 1) {
//       res.json({
//         message: `User updated successfully!`,
//       })
//     } else {
//       res.send({
//         message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`,
//       })
//     }
//   })
// }

// // Delete a User by id
// exports.delete = (req, res) => {
//   const { id } = req.params

//   User.destroy({
//     where: { id },
//   }).then((num) => {
//     if (+num === 1) {
//       res.json({
//         message: `User deleted successfully!`,
//       })
//     } else {
//       res.send({
//         message: `Cannot delete User with id=${id}. Maybe User was not found or req.body is empty!`,
//       })
//     }
//   })
// }
