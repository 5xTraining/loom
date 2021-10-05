// 後端實作程式碼

import express from "express"
import http from "http"

const app = express()
const server = http.createServer(app)

app.set("view engine", "ejs")
app.use(express.static("public"))

app.get("/", (_, res) => {
  res.render("home")
})

server.listen(3000, () => {
  console.log(`application is running on http://localhost:3000`)
})
