const express = require("express")
const userModel = require("./models/user.model")

const app = express()

//middleware
app.use(express.json())


app.post("/create-user", async (req, res) => {
    try {
        const { name, email, mobile, password } = req.body
        const newUser = await userModel.create({ name, email, mobile, password })
        return res.status(201).json({
            message: "User created successfully",
            user: newUser
        })

    }
    catch (error) {
        return res.status(500).json({
            message: "Internal server error"
        })
    }


})



module.exports = app