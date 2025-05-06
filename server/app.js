import express from "express"
import cors from "cors"

import "./database/mongoose.js"
import "dotenv/config"
import { classRouter } from "./routes/classRouter.js"

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use("/class", classRouter)

app.get("/", (req, res) => res.send("Hello!"))

app.listen(PORT, () => console.log(`Server running on port ${PORT}!`))
