const request = require("supertest")
const Server = require("../../server")
const app = new Server().app

let token = null

describe("Caracteristicas Routes", () => {
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

  it("Post route /caracteristicas with status 200", async () => {
    const res = await request(app)
      .post("/api/caracteristicas")
      .set("Authorization", `Bearer ${token}`)
      .send({
        descripcion: "Aire acondicionado",
        cantidad: "2",
        id_alojamiento: "1",
      })
    expect(res.status).toBe(200)
  })
})
