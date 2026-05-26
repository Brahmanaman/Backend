const express = require("express")
const app = express()
const cors = require("cors")
const filerouter = require("./routes/file.route")

app.use(cors({
    origin: "http://localhost:5173"
}))
app.use(express.json())
app.use("/api/file", filerouter)





module.exports = app;