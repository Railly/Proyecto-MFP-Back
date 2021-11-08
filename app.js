const Server = require("./server")

const server = new Server()
server.listen()
// const express = require("express")

// const app = express()
// const port = 3000

// app.get("/", (req, res) => {
//   res.send("Hello World!")
// })

// app.get("/products", (req, res) => {
//   res.json([
//     {
//       name: "Product 1",
//       price: 10,
//     },
//     {
//       name: "Product 2",
//       price: 20,
//     },
//   ])
// })

// app.get("/users", (req, res) => {
//   const { limit, offset } = req.query
//   if (limit && offset) {
//     res.json({
//       limit,
//       offset,
//     })
//   }
//   res.send("There is no parameters")
// })

// app.get("/products/:productId", (req, res) => {
//   const { productId } = req.params
//   res.json({
//     id: productId,
//     name: "Product 2",
//     price: 20,
//   })
// })

// app.get("/categories/:categorieId/products/:productId", (req, res) => {
//   const { categorieId, productId } = req.params
//   res.json({
//     categorieId,
//     productId,
//   })
// })

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`)
// })
