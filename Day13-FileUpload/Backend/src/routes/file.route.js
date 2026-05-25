const express = require("express")
const upload = require("../config/multer")
const { imageUploadController } = require("../controllers/file.controller")

const router = express.Router()

router.post("/image-upload", upload.single("image"), imageUploadController)

module.exports = router