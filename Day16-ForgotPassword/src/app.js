const express = require("express")
const app = express()
const authRouter = require("./routes/auth.route")
const cookieParser = require('cookie-parser')
const errorMiddleware = require("./middleware/error.middleware")
const ejs = require("ejs")
app.set("view engine", "ejs");


app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())
app.use(cookieParser())

app.get("/forget-password", (req, res) => {
    res.render("index")
})
app.use("/api/auth", authRouter)


app.use(errorMiddleware)



module.exports = app;