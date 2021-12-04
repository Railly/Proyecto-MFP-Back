const request = require("supertest")
const favoritesService = require("../services/favoritos.service")
const Server = require("../../server")
const app = new Server().app

let token = null

describe("Favoritos Routes", () => {
  beforeAll((done) => {
    request(app)
      .post("/api/usuarios/login")
      .send({
        correo: "raillyhugo@gmail.com",
        contraseña: "Contra123",
      })
      .end((err, res) => {
        token = res.body.token
        done()
      })
  })

  it("should return status 200", async () => {
    const res = await request(app)
      .get("/api/favoritos")
      .set("Authorization", `Bearer ${token}`)

    expect(res.status).toBe(200)
    expect(res.body).toHaveProperty("data")
  })
})
