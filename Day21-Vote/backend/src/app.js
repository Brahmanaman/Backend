import express from "express"
import path from "path"
import { fileURLToPath } from "url"

const app = express()
const _dirname = path.dirname(fileURLToPath(import.meta.url))
app.use(express.static(_dirname + "/public"))


app.get("/", (req, res) => {
    res.send("hello world")
})

export default app