const cloudinary = require("cloudinary").v2

const fileToBase64 = (mimetype, buffer) => {
  const base64Buffer = Buffer.from(buffer).toString("base64")
  return "data:" + mimetype + ";base64," + base64Buffer
}

cloudinary.config(process.env.CLOUDINARY_URL)

const cloudinaryImageUpload = async (file) => {
  const imageBase64 = fileToBase64(file.mimetype, file.data) //use tempdir to avoid using node fs
  const { secure_url } = await cloudinary.uploader.upload(imageBase64, {
    folder: `Homy/Images`,
  })
  return secure_url
}

module.exports = {
  cloudinaryImageUpload,
}
