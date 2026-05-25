const imagekit = require("@imagekit/nodejs")
const config = require("../config/config")
const fileModel = require("../models/file.model")

const client = new imagekit({
    privateKey: config.IMAGEKIT_KEY
})

async function uploadFile(buffer, fileName) {
    const response = await client.files.upload({
        file: buffer.toString("base64"),
        fileName
    })

    const newfile = await fileModel.create({
        images: response.url,
        name: Date.now() + "_" + fileName
    })

    return newfile
}

module.exports = uploadFile