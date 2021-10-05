import express from "express"
const app = express()

app.set("view engine", "ejs")
app.use(express.static("public"))

app.get("/", (_, res) => {
  res.render("home")
})

app.listen(3000, () => {
  console.log(`application is running on http://localhost:3000`)
})
