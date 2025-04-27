import express from "express"

import Class from "../models/classModel.js"

const classRouter = express.Router()

classRouter.get("/", async (req, res) => {
  try {
    const classes = await Class.find({})
    res.status(200).send(classes)
  } catch (error) {
    res.status(500).send({ error: error.message })
  }
})

classRouter.post("/", async (req, res) => {
  try {
    await Class.create(req.body)
    res.status(201).send({ ...req.body })
  } catch (error) {
    res.status(500).send({ error: error.message })
  }
})

export { classRouter }
