const express = require("express")
const upload = require("../config/multer")
const { imageUploadController, mutipleImageUploadController } = require("../controllers/file.controller")

const router = express.Router()

router.post("/image-upload", upload.single("image"), imageUploadController)
router.post("/multiple-image-upload", upload.array("images"), mutipleImageUploadController)

module.exports = router