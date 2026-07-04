import express from "express"
import router from "./routes/index.routes.js"

const app = express();

app.use(express.json())

app.get("/", (req, res) => {
    res.send("hello world")
})

/**
 * mouting all the routes
 */
app.use("/api", router)

export default app