const AccommodationService = require("../../services/alojamiento.service")

test("create", async () => {
  const accommodation = {
    direccion: "Calle falsa 123",
  }
  const result = await AccommodationService.create(accommodation)
  expect(result).toBeDefined()
  expect(result.direccion).toBe(accommodation.direccion)
})

test("getById", async () => {
  const accommodation = await AccommodationService.getById(1)
  expect(accommodation.id).toBe(1)
})

test("getAll", async () => {
  const accommodations = await AccommodationService.getAll()
  expect(accommodations.length).toBe(3)
})
