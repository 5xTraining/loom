// 後端實作程式碼
import express from "express"
import http from "http"
import { Server } from "socket.io"

const app = express()
const server = http.createServer(app)
const io = new Server(server)

app.set("view engine", "ejs")
app.use(express.static("public"))

app.get("/", (_, res) => {
  res.render("home")
})

app.get("/rooms/new", (_, res) => {
  res.redirect(`/${Math.floor(Math.random() * 1000000000)}`)
})

app.get("/:room", (req, res) => {
  res.render("room", { room_id: req.params.room })
})

// websocket
io.on("connection", (socket) => {
  socket.on("ENTER_ROOM", (room_id, user_name) => {
    socket.join(room_id)
    socket.broadcast.to(room_id).emit("USER_ENTERED", user_name)

    socket.on("disconnect", () => {
      socket.broadcast.to(room_id).emit("USER_LEFT", user_name)
    })
  })
})

server.listen(3000, () => {
  console.log(`application is running on http://localhost:3000`)
})
