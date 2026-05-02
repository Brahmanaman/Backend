const http = require("http")

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("this is a get request")
    }
})


server.listen(3000, () => {
    console.log(`server is listening on http://localhost:3000`);
})