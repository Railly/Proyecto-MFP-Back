const request = require("supertest")
const Server = require("../../server")
const app = new Server().app

let token = null

describe("Alojamiento Routes", () => {
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

  it("Get route /alojamiento with status 200", async () => {
    const res = await request(app)
      .get("/api/alojamiento")
      .set("Authorization", `Bearer ${token}`)
      .send()
    expect(res.status).toBe(200)
    expect(res.body.data).toBeDefined()
  })

  it("Get route /alojamiento/:id with status 200", async () => {
    const res = await request(app)
      .get("/api/alojamiento/1")
      .set("Authorization", `Bearer ${token}`)
      .send()
    expect(res.status).toBe(200)
    expect(res.body.data).toBeDefined()
  })

  it("Post route /alojamiento with status 400", async () => {
    const res = await request(app)
      .post("/api/alojamiento")
      .set("Authorization", `Bearer ${token}`)
      .send({
        alojamiento: {
          direccion: "Av. Precursores 310",
          id_tipo_alojamiento: 6,
        },
        anuncio: {
          descripcion: "Descripcion desde post",
          precio: 200.0,
          nombre: "Nueva Casa",
        },
        caracteristicas: [
          {
            descripcion: "Baños",
            cantidad: 2,
          },
          {
            descripcion: "Estacionamientos",
            cantidad: 4,
          },
        ],
        imagen: "aubose",
      })
    expect(res.status).toBe(200)
  })
})
