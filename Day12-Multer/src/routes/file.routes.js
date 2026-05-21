const express = require("express")
const upload = require("../config/multer")
const router = express.Router()
const uploadFiles = require("../services/imagekit.service")


router.post("/upload", upload.single("image"), (req, res) => {
    res.send(req.file)
})

router.post("/upload-multipleFiles", upload.array("images"), (req, res) => {
    res.send(req.files)
})


router.post("/uploadStream", upload.single("image"), (req, res) => {
    const response = uploadFiles(req.file.buffer, req.file.originalname)
    res.send(response)
})




module.exports = router