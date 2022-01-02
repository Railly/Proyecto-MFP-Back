const request = require("supertest")
const Server = require("../../server")
const app = new Server().app

let token = null

describe("Comentarios Routes", () => {
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

  it("Post route /comentarios with status 200", async () => {
    const res = await request(app)
      .post("/api/comentarios")
      .set("Authorization", `Bearer ${token}`)
      .send({
        id_anuncio: 1,
        contenido: "Hola",
        calificacion: 5,
      })

    expect(res.status).toBe(201)
  })
})
