const request = require("supertest")
const Server = require("../../server")
const app = new Server().app

describe("User Routes", () => {
  it("Post route /login with status 200", async () => {
    const res = await request(app).post("/api/usuarios/login").send({
      correo: "raillyhugo@gmail.com",
      contraseña: "Contra123",
    })
    expect(res.status).toBe(200)
    expect(res.body.token).toBeDefined()
  })

  it("Post route /login with status 404", async () => {
    const res = await request(app).post("/api/usuarios/login").send({
      correo: "raillyhugo@gmail.com",
      contraseña: "Contra1234",
    })
    expect(res.status).toBe(404)
    expect(res.body.token).toBeUndefined()
  })

  it("Post rout /registro with status 200", async () => {
    const res = await request(app).post("/api/usuarios/registro").send({
      correo: "raillyhugo2@gmail.com",
      contraseña: "Contra123",
      nombre: "Railly2",
      apellidos: "Hugo2",
    })
    expect(res.status).toBe(200)
    expect(res.body.data).toBeDefined()
  })
  it("Post rout /registro with status 404", async () => {
    const res = await request(app).post("/api/usuarios/registro").send({
      correo: "raillyhugo@gmail.com",
      contraseña: "Contra123",
      nombre: "Railly2",
      apellidos: "Hugo2",
    })
    expect(res.status).toBe(404)
    expect(res.body.data).toBeUndefined()
  })

  it("Put rout /usuarios/:id with status 200", async () => {
    const res = await request(app).put("/api/usuarios/4").send({
      contraseña: "Contra123456",
    })
    expect(res.status).toBe(200)
    expect(res.body.data).toBeDefined()
  })

  it("Put rout /usuarios/:id with status 404", async () => {
    const res = await request(app).put("/api/usuarios/5").send({
      contraseña: "Contra123456",
    })
    expect(res.status).toBe(404)
    expect(res.body.data).toBeUndefined()
  })

  it("Delete rout /usuarios/:id with status 200", async () => {
    const res = await request(app).delete("/api/usuarios/4")
    expect(res.status).toBe(200)
    expect(res.body.data).toBeDefined()
  })

  it("Delete rout /usuarios/:id with status 404", async () => {
    const res = await request(app).delete("/api/usuarios/5")
    expect(res.status).toBe(404)
    expect(res.body.data).toBeUndefined()
  })
})
