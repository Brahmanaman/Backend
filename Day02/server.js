const express = require("express")

const app = express()

app.get("/", (req, res) => {
    console.log(req)
    res.send("server is running");
})

app.listen(3000, () => {
    console.log("server is listening on http://localhost:3000");
})