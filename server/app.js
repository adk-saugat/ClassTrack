import express from "express"
import "dotenv/config"
import { classRouter } from "./routes/class.js"

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use("/class", classRouter)

app.listen(PORT, () => console.log(`Server running on port ${PORT}!`))
