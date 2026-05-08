const express = require("express")
const jwt = require("jsonwebtoken")
const userModel = require("../models/user.model")

const router = express.Router()

router.post("/post", async (req, res) => {
    const token = req.cookies.token
    if (!token) {
        return res.status(401).json({
            message: "unauthorized"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await userModel.findOne({ _id: decoded.id })
        console.log(user)
    }
    catch (error) {
        return res.status(401).json({
            message: "invalid token"
        })
    }

    console.log("post created successfully")
})


module.exports = router