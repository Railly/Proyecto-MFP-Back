const request = require("supertest")
const Server = require("../../server")
const app = new Server().app

let token = null

describe("Anuncio Routes", () => {
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

  it("Post route /anuncio with status 200", async () => {
    const res = await request(app)
      .post("/api/anuncio")
      .set("Authorization", `Bearer ${token}`)
      .send({
        descripcion: "Descripcion desde post",
        precio: 200.0,
        nombre: "Nueva Casa",
        id_alojamiento: 1,
      })
    expect(res.status).toBe(200)
  })

  it("Get route /anuncio with status 200", async () => {
    const res = await request(app)
      .get("/api/anuncio")
      .set("Authorization", `Bearer ${token}`)
    expect(res.status).toBe(200)
  })

  it("Get route /anuncio/:id with status 200", async () => {
    const res = await request(app)
      .get("/api/anuncio/1")
      .set("Authorization", `Bearer ${token}`)
    expect(res.status).toBe(200)
  })
})
