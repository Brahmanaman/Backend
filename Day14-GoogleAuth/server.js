const app = require("./src/app")
const connectDb = require("./src/config/db")

connectDb()

app.listen(3000, () => {
    console.log("server is runnning on http://localhost:3000")
})