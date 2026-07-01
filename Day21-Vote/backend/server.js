import app from "./src/app.js"
import initSocket from "./src/sockets/socket.server.js";
import { createServer } from "http"

const httpServer = createServer(app)
initSocket(httpServer)

const PORT = 3000;


httpServer.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})