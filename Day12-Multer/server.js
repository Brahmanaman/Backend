require("dotenv").config()
const express = require("express")
const app = require("./src/app")

//middleware
app.use(express.json())





app.listen(3000, () => {
    console.log("server is listening on http://localhost:3000");
})