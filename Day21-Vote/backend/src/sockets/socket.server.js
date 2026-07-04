import { Server } from "socket.io"

const MAX_USERS = 2
let voteCounts = {}
const socketsids = []

export default function initSocket(httpserver) {
    const io = new Server(httpserver)
    io.on("connection", (socket) => {
        console.log("user connected")
        const { room } = socket.handshake.query
        const roomClients = io.sockets.adapter.rooms.get(room)
        const noOfUsers = roomClients ? roomClients.size : 0
        console.log(noOfUsers)
        if (noOfUsers >= MAX_USERS) {
            console.log("Room is full")

            socket.emit("room_full", {
                message: "Room is full"
            })

            socket.disconnect();
            return;

        }
        socket.join(room)

        if (!voteCounts[room]) {
            voteCounts[room] = { yes: 0, no: 0 }
        }


        socket.on("vote_yes", () => {

            if (socketsids.includes(socket.id)) return;
            socketsids.push(socket.id)
            voteCounts[room].yes += 1;
            // io.emit("vote_updated", voteCounts);
            io.to(room).emit("vote_updated", voteCounts[room]);
        })

        socket.on("vote_no", () => {
            if (socketsids.includes(socket.id)) return;
            socketsids.push(socket.id)
            voteCounts[room].no += 1;
            // io.emit("vote_updated", voteCounts);   
            io.to(room).emit("vote_updated", voteCounts[room]);
        })

        socket.on("disconnect", () => {
            console.log("user disconnected")
        })
    })
}