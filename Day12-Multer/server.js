const app = require("./src/app")
const express = require("express")

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))





app.listen(3000, () => {
    console.log("server is listening on http://localhost:3000");
})