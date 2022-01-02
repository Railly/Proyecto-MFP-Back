const router = require("express").Router()
const validatorHandler = require("../middlewares/validator.handler")
const AccommodationService = require("../services/alojamiento.service")
const validateJWT = require("../middlewares/validateJWT.handler")
const FeaturesService = require("../services/caracteristicas.service")
const ImgsAnnouncementService = require("../services/imagenes_anuncio.service")
const AnnouncementService = require("../services/anuncio.service")
const { cloudinaryImageUpload } = require("../utils/cloudinaryImageUpload")

// User Routes
router.post("/", validateJWT, async (req, res) => {
  const { user } = req
  const imgUrl = await cloudinaryImageUpload(req.files.imagen)

  const accommodation = await AccommodationService.create({
    direccion: req.body["alojamiento[direccion]"],
    id_tipo_alojamiento: req.body["alojamiento[id_tipo_alojamiento]"],
    id_usuario: user.id,
  })

  const { id: alojamientoId } = accommodation
  const caracteristicas = Array.from(
    {
      length: 5,
    },
    (v, i) => {
      return {
        descripcion: req.body[`caracteristicas[${i}][descripcion]`],
        cantidad: req.body[`caracteristicas[${i}][cantidad]`],
        id_alojamiento: alojamientoId,
      }
    }
  )

  const car = await FeaturesService.create(caracteristicas)

  const announcement = await AnnouncementService.create({
    descripcion: req.body["anuncio[descripcion]"],
    nombre: req.body["anuncio[nombre]"],
    precio: req.body["anuncio[precio]"],
    id_alojamiento: alojamientoId,
  })

  const { id: anuncioId } = announcement

  const img = ImgsAnnouncementService.create({
    imagen: imgUrl,
    id_anuncio: anuncioId,
  })

  res.status(200).json({
    message: "Alojamiento creado exitosamente",
    ok: true,
    data: {
      anuncio: announcement,
      alojamiento: accommodation,
      caracteristicas: car,
      imagen: img,
    },
  })
})

router.get("/", validateJWT, async (req, res) => {
  const accommodations = await AccommodationService.getAll()
  res.status(200).json({
    message: "Los alojamientos se han obtenido exitosamente",
    data: {
      alojamientos: accommodations,
    },
  })
})

router.get("/:id", validateJWT, async (req, res) => {
  const { id } = req.params
  const accommodation = await AccommodationService.getById(id)
  res.status(200).json({
    message: "El alojamiento se ha obtenido exitosamente",
    data: {
      alojamientos: accommodation,
    },
  })
})

router.put("/:id", validateJWT, async (req, res) => {
  const { id } = req.params

  await AccommodationService.update(id, {
    direccion: req.body?.["alojamiento[direccion]"],
    id_tipo_alojamiento: req.body?.["alojamiento[id_tipo_alojamiento]"],
  })

  if (req.body["anuncio[id_anuncio]"]) {
    await AnnouncementService.update(req.body?.["anuncio[id_anuncio]"], {
      descripcion: req.body?.["anuncio[descripcion]"],
      nombre: req.body?.["anuncio[nombre]"],
      precio: req.body?.["anuncio[precio]"],
    })
  }

  const caracteristicas = Array.from(
    {
      length: 6,
    },
    (v, i) => {
      return {
        descripcion: req.body[`caracteristicas[${i}][descripcion]`],
        cantidad: req.body[`caracteristicas[${i}][cantidad]`],
        id_caracteristica: req.body[`caracteristicas[${i}][id_caracteristica]`],
      }
    }
  )

  if (caracteristicas.length > 0) {
    const mappedFeatures = caracteristicas.map(async (caracteristica) => {
      if (caracteristica) {
        const feat = {
          descripcion: caracteristica.descripcion,
          cantidad: caracteristica.cantidad,
        }
        if (
          caracteristica.id_caracteristica === "undefined" &&
          (caracteristica.descripcion || caracteristica.cantidad)
        ) {
          return FeaturesService.create([{ ...feat, id_alojamiento: id }])
        } else {
          return FeaturesService.update(caracteristica.id_caracteristica, feat)
        }
      }
    })
    await Promise.all(mappedFeatures)
  }

  if (req.files?.imagen) {
    const imgUrl = await cloudinaryImageUpload(req.files.imagen)
    await ImgsAnnouncementService.update(req.body?.["anuncio[id_anuncio]"], {
      imagen: imgUrl,
    })
  }

  res.status(200).json({
    message: "El alojamiento se ha actualizado exitosamente",
    ok: true,
  })
})

router.delete("/:id", validateJWT, async (req, res) => {
  const { id } = req.params
  await AccommodationService.delete(id)
  res.status(200).json({
    message: "El alojamiento se ha eliminado exitosamente",
  })
})

module.exports = router

// Generatio large documentation for this file

/**
 * @swagger
 * /api/v1/alojamientos:
 *  post:
 *     tags:
 *       - Alojamientos
 *     description: Crea un alojamiento
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: alojamiento
 *         description: alojamiento que se va a crear
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Alojamiento'
 *     responses:
 *       200:
 *         description: alojamiento creado exitosamente
 *         schema:
 *           $ref: '#/definitions/Alojamiento'
 *       400:
 *         description: Error al crear el alojamiento
 *         schema:
 *           $ref: '#/definitions/Error'
 *       401:
 *         description: No autorizado
 *         schema:
 *           $ref: '#/definitions/Error'
 */

/**
 * @swagger
 * /api/v1/alojamientos:
 *   get:
 *     tags:
 *       - Alojamientos
 *     description: Obtiene todos los alojamientos
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: alojamientos obtenidos exitosamente
 *         schema:
 *           $ref: '#/definitions/Alojamiento'
 *       400:
 *         description: Error al obtener los alojamientos
 *         schema:
 *           $ref: '#/definitions/Error'
 *       401:
 *         description: No autorizado
 *         schema:
 *           $ref: '#/definitions/Error'
 */

/**
 * @swagger
 * /api/v1/alojamientos/{id}:
 *   get:
 *     tags:
 *       - Alojamientos
 *     description: Obtiene un alojamiento
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: id del alojamiento
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: alojamiento obtenido exitosamente
 *         schema:
 *           $ref: '#/definitions/Alojamiento'
 *       400:
 *         description: Error al obtener el alojamiento
 *         schema:
 *           $ref: '#/definitions/Error'
 *       401:    parameters:
 *        description: No autorizado
 *        schema:
 *         $ref: '#/definitions/Error'
 *      404:
 *       description: No se encontró el alojamiento
 *      schema:
 *      $ref: '#/definitions/Error'
 *  put:
 *     - Alojamientos
 *    description: Actualiza un alojamiento
 *    produces:
 *      - application/json
 *    parameters:
 *      - name: id
 *        description: id del alojamiento
 *        in: path
 *        required: true
 *        type: string
 *      - name: alojamiento
 *        description: alojamiento que se va a actualizar
 *        in: body
 *        required: true
 *        schema:
 *          $ref: '#/definitions/Alojamiento'
 *    responses:
 *      200:
 *        description: alojamiento actualizado exitosamente
 *        schema:
 *          $ref: '#/definitions/Alojamiento'
 *      400:
 *        description: Error al actualizar el alojamiento
 *        schema:
 *          $ref: '#/definitions/Error'
 *      401:
 *        description: No autorizado
 *        schema:
 *          $ref: '#/definitions/Error'
 *  delete:
 *    tags:
 *      - Alojamientos
 *    description: Elimina un alojamiento
 *    produces:
 *      - application/json
 *    parameters:
 *      - name: id
 *        description: id del alojamiento
 *        in: path
 *        required: true
 *        type: string
 *    responses:
 *      200:
 *        description: alojamiento eliminado exitosamente
 *      400:
 *        description: Error al eliminar el alojamiento
 *        schema:
 *          $ref: '#/definitions/Error'
 *      401:
 *        description: No autorizado
 *        schema:
 *          $ref: '#/definitions/Error'
 */
