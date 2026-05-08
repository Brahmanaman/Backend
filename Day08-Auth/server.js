const app = require('./src/app')
const dbConnect = require("./src/config/db")

dbConnect()

app.listen(3000, () => console.log('Server running on port 3000'))