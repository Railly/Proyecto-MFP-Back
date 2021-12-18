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

  it("Post route /alojamiento with status 200", async () => {
    const res = await request(app)
      .post("/api/alojamiento")
      .set("Authorization", `Bearer ${token}`)
      .set("Content-Type", "multipart/form-data")
      .field("alojamiento[direccion]", "Calle falsa 123")
      .field("alojamiento[id_tipo_alojamiento]", "1")
      .field("caracteristicas[0][descripcion]", "Cuarto")
      .field("caracteristicas[0][cantidad]", "1")
      .field("caracteristicas[1][descripcion]", "Cuarto")
      .field("caracteristicas[1][cantidad]", "1")
      .field("caracteristicas[2][descripcion]", "Cuarto")
      .field("caracteristicas[2][cantidad]", "1")
      .field("caracteristicas[3][descripcion]", "Cuarto")
      .field("caracteristicas[3][cantidad]", "1")
      .field("caracteristicas[4][descripcion]", "Cuarto")
      .field("caracteristicas[4][cantidad]", "1")
      .field("anuncio[descripcion]", "Descripcion")
      .field("anuncio[nombre]", "Nombre")
      .field("anuncio[precio]", "200")
      .attach("imagen", "__tests__/assets/test.jpg")

    expect(res.status).toBe(200)
  })
})

it("Put route /alojamiento with status 200", async () => {
  const res = await request(app)
    .put("/api/alojamiento/1")
    .set("Authorization", `Bearer ${token}`)
    .set("Content-Type", "multipart/form-data")
    .field("alojamiento[direccion]", "Calle falsa 123")
    .field("alojamiento[id_tipo_alojamiento]", "1")
    .field("caracteristicas[0][id_caracteristica]", "1")
    .field("caracteristicas[0][descripcion]", "Cuarto")
    .field("caracteristicas[0][cantidad]", "1")
    .field("caracteristicas[1][id_caracteristica]", "2")
    .field("caracteristicas[1][descripcion]", "Cuarto1")
    .field("caracteristicas[1][cantidad]", "1")
    .field("caracteristicas[2][id_caracteristica]", "3")
    .field("caracteristicas[2][descripcion]", "Cuarto2")
    .field("caracteristicas[2][cantidad]", "1")
    .field("caracteristicas[3][id_caracteristica]", "undefined")
    .field("caracteristicas[3][descripcion]", "Cuarto3")
    .field("caracteristicas[3][cantidad]", "1")
    .field("caracteristicas[4][id_caracteristica]", "undefined")
    .field("caracteristicas[4][descripcion]", "Cuarto4")
    .field("caracteristicas[4][cantidad]", "1")
    .field("caracteristicas[5][id_caracteristica]", "undefined")
    .field("caracteristicas[5][descripcion]", "Cuarto5")
    .field("caracteristicas[5][cantidad]", "1")
    .field("anuncio[id_anuncio]", "1")
    .field("anuncio[descripcion]", "Descripcion")
    .field("anuncio[nombre]", "Nombre")
    .field("anuncio[precio]", "200")
    .attach("imagen", "__tests__/assets/test.jpg")

  expect(res.status).toBe(200)
})

it("Delete route /alojamiento with status 200", async () => {
  const res = await request(app)
    .delete("/api/alojamiento/1")
    .set("Authorization", `Bearer ${token}`)
    .send()

  expect(res.status).toBe(200)
})
