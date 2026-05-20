const express = require("express")
const upload = require("../config/multer")
const router = express.Router()

router.post("/upload", upload.single("image"), (req, res) => {
    res.send(req.file)
})

router.post("/upload-multipleFiles", upload.array("images"), (req, res) => {
    res.send(req.files)
})




module.exports = router