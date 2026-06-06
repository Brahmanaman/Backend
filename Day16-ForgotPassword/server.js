const app = require("./src/app")
const express = require("express")
const connectDb = require("./src/config/db")

connectDb()

app.use(express.json())


app.listen(3000, () => {
    console.log("server is listening on http://localhost:3000");
})