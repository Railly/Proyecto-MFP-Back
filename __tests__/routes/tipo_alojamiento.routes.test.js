const request = require("supertest")
const Server = require("../../server")
const app = new Server().app

let token = null

describe("Tipo alojamiento Routes", () => {
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

  it("Get route /tipo_alojamiento with status 200", async () => {
    const res = await request(app)
      .get("/api/tipo_alojamiento")
      .set("Authorization", `Bearer ${token}`)
      .send()
    expect(res.status).toBe(200)
  })
})
