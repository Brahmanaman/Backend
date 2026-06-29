import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";



const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer)

//io == server
//socket == single user

//on == event listen 
//emit == event fire

io.on("connection", (socket) => {
    console.log("user connected")
    socket.on("tesla", () => {
        console.log("tesla is listening")
        io.emit("musk")
    })
    socket.on("disconnect", () => {
        console.log("user disconnected")
    })
})


httpServer.listen(3000, () => {
    console.log("server is running")
})