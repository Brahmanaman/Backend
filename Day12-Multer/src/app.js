const express = require("express")
const app = express();
const fileRoutes = require("./routes/file.routes")


app.use("/api/file", fileRoutes)





module.exports = app

