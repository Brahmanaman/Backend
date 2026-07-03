import { Server } from "socket.io"

let voteCounts = {
    yes: 0,
    no: 0
}

const socketsids = []

export default function initSocket(httpserver) {
    const io = new Server(httpserver)
    io.on("connection", (socket) => {
        console.log("user connected")

        socket.on("vote_yes", () => {
            if (socketsids.includes(socket.id)) return;
            socketsids.push(socket.id)
            voteCounts.yes += 1;
            io.emit("vote_updated", voteCounts);
        })

        socket.on("vote_no", () => {
            if (socketsids.includes(socket.id)) return;
            socketsids.push(socket.id)
            voteCounts.no += 1;
            io.emit("vote_updated", voteCounts);
        })

        socket.on("disconnect", () => {
            console.log("user disconnected")
        })
    })
}