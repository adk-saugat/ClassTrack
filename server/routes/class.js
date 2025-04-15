import express from "express"

const classRouter = express.Router()

classRouter.get("/", (req, res) => {
  res.send("Class Router working!")
})

export { classRouter }
