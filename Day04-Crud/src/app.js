const express = require("express")
const connectDb = require("./config/db")

const app = express()
connectDb()
let users = []

//middleware
app.use(express.json())


app.post("/set-user", (req, res) => {
    users.push(req.body)
    return res.status(201).json({
        message: "user created successfully",
    });
})

app.get("/get-user", (req, res) => {
    return res.status(200).json({
        users,
        message: "user fetched successfully"
    })
})

app.patch("/update-user/:index", (req, res) => {
    let { index } = req.params;
    let { age } = req.body;
    users[index].age = age;
    return res.status(200).json({
        message: "user updated successfully"
    })
})

app.delete("/delete-user/:index", (req, res) => {
    let { index } = req.params;
    users.splice(index, 1);
    res.status(200).json({
        message: "user deleted successfully"
    })
})



module.exports = app;