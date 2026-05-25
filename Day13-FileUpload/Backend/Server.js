const app = require("./src/app")
const dbConnect = require("./src/config/db")


dbConnect()


app.listen(3000, () => {
    console.log("server is listening on http://localhost:3000");
})