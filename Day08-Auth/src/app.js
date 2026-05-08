const express = require('express')
const authRoutes = require("./routes/auth.routes")
const postRoutes = require("./routes/post.routes")
const cookieParser = require('cookie-parser')


const app = express()
app.use(express.json()) //middleware to parse json
app.use(cookieParser()) //middleware to set cookie 

app.use("/api/auth", authRoutes)
app.use("/api/post", postRoutes)


module.exports = app