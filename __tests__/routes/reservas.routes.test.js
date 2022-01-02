const request = require("supertest")
const Server = require("../../server")
const app = new Server().app

let token = null

describe("Reservas Routes", () => {
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

  it("Post route /reservas with status 200", async () => {
    const response = await request(app)
      .post("/api/reservas")
      .set("Authorization", `Bearer ${token}`)
      .send({
        fecha_reserva: "2020-12-20 00:00:00.000000 +00:00",
        fecha_fin: "2020-12-20 00:00:00.000000 +00:00",
        fecha_caducidad: "2020-12-20 00:00:00.000000 +00:00",
        numero_tarjeta: "3267234",
        cvv: "234",
        id_alojamiento: 2,
      })
      .expect(201)
  })

  it("Get route /reservas/realizadas with status 200", async () => {
    const response = await request(app)
      .get("/api/reservas/realizadas")
      .set("Authorization", `Bearer ${token}`)
      .expect(200)
  })

  it("Get route /reservas/recibidas with status 200", async () => {
    const response = await request(app)
      .get("/api/reservas/recibidas")
      .set("Authorization", `Bearer ${token}`)
      .expect(200)
  })
})
