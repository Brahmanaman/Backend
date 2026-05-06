const express = require("express")
const multer = require("multer")
const app = express()
const uploadFile = require("./services/storage.service")
const postModel = require("./models/post.model")

//middleware
app.use(express.json())

const storage = multer({ storage: multer.memoryStorage() })


app.post("/create-post", storage.single("image"), async (req, res) => {
    try {
        const result = await uploadFile(req.file.buffer)
        const post = await postModel.create({
            image: result.url,
            caption: req.body.caption
        })

        return res.status(201).send({
            message: "post create successfully",
            data: post
        })

    }
    catch (error) {
        return res.status(500).send({
            message: "something went wrong",
            error: error.message
        })
    }
})

app.get("/posts", async (req, res) => {
    try {
        const postData = await postModel.find()
        return res.status(200).send({
            message: "posts fetched successfully",
            data: postData
        })
    }
    catch (error) {
        res.status(500).send({
            message: "internal server error",
            error: error.message
        })
    }
})


module.exports = app