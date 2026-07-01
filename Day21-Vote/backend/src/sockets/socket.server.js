import { server } from "socket.io"

voteCounts = {
    yes: 0,
    no: 0
}

export default function initSocket(httpserver) {
    const io = new server(httpserver)
    io.on("connection", (socket) => {
        console.log("user connected")

        socket.on("vote_yes", () => {
            voteCounts.yes += 1;
            io.emit("vote_updated", voteCounts);
        })

        socket.on("vote_no", () =>{
            voteCounts.no += 1;
            io.emit("vote_updated", voteCounts);
        })
        
        socket.on("disconnect", () => {
            console.log("user disconnected")
        })
    })
}