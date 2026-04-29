
const http = require("http")

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("hello world")
    }
    if(req.url === "/hey"){
        res.end("hey")
    }

})

server.listen(3000, () => console.log("server is running at http://localhost:3000"))