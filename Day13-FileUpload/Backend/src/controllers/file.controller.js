
const uploadFile = require("../services/imagekit.service")
const imageUploadController = async (req, res) => {
    try {
        let result = uploadFile(req.file.buffer, req.file.originalname)
        return res.status(201).json({
            message: "File uploaded successfully",
            file: result
        })
    }
    catch (error) {
        throw new Error("internal server error")
    }
}

const mutipleImageUploadController = async (req, res) => {
    try {
        let result = await Promise.all(req.files.map(async (file) => {
            return await uploadFile(file.buffer, file.originalname)
        }))
        return res.status(201).json({
            message: "Files uploaded successfully",
            files: result
        })
    }
    catch (error) {
        throw new Error("internal server error")
    }
}

module.exports = {
    imageUploadController,
    mutipleImageUploadController
}