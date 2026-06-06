const express = require("express")
const app = express()
const authRouter = require("./routes/auth.route")
const cookieParser = require('cookie-parser')
const errorMiddleware = require("./middleware/error.middleware")

app.use(express.json())
app.use(cookieParser())


app.use("/api/auth", authRouter)


app.user(errorMiddleware)



module.exports = app;