const express = require("express")
const mailRouter = require("./routes/mail.route")

const app = express()

app.use("/api/mail", mailRouter)


module.exports = app