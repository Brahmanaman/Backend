const express = require("express")
const app = express()
app.use(express.json())
const user = [
    {
        name: "aman",
        age: 25
    },
    {
        name: "pawan",
        age: 20
    },
    {
        name: "neha",
        age: 22
    },
    {
        name: "nikita",
        age: 22
    }, {
        name: "mona",
        age: 36
    }
]

//send user data to client
app.get("/", (req, res) => {
    res.status(200).json({
        user,
        message: "user fetched successfully",
    })
})

//get the data from client
app.post("/GetUser", (req, res) => {
    console.log(req.body)
    res.status(200).json("data fetched successfully")
})


app.listen(3000, () => {
    console.log("server is running on http://localhost:3000");
})