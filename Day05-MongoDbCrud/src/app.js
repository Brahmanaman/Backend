const express = require("express")
const userModel = require("./models/user.model")

const app = express()

//middleware
app.use(express.json())


app.post("/create-user", async (req, res) => {
    try {
        const { name, email, mobile, password } = req.body
        if (!name || !email || !mobile || !password) {
            return res.status(400).json({
                message: "All field is required"
            })
        }
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

app.get("/getUser", async (req, res) => {
    let users = await userModel.find();
    return res.status(200).json({
        message: "User fetched successfully",
    })
})

app.put("/users/update/:id", async (req, res) => {
    try {
        const { name, email, mobile, password } = req.body
        if (!name || !email || !mobile || !password) {
            return res.status(400).json({
                message: "All field is required"
            })
        }

        let { id } = req.params
        let updatedUser = userModel.findByIdAndUpdate(id, {
            name, email, mobile, password
        }, { new: true })
        return res.status(200).json({
            message: "User updated successfully",
            updatedUser
        })
    }
    catch (error) {
        return res.status(500).json({
            message: "Internal server error"
        })
    }
})


app.delete("/users/delete/:id", async (req, res) => {
    try {
        let { id } = req.params
        let deletedUser = await userModel.findByIdAndDelete(id)
        return res.status(200).json({
            message: "User deleted successfully",
            deletedUser
        })
    }
    catch (error) {
        return res.status(500).json({
            message: "Internal server error"
        })
    }
})



module.exports = app