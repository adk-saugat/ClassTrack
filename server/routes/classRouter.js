import express from "express"
import Class from "../models/classModel.js"

const classRouter = express.Router()

// Helper to check time overlap
const isTimeOverlap = (start1, end1, start2, end2) => {
  return start1 < end2 && start2 < end1
}

// Helper to convert "HH:mm" -> minutes
const parseTime = (timeStr) => {
  const [hours, minutes] = timeStr.split(":").map(Number)
  return hours * 60 + minutes
}

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
    const { room, day, start, end } = req.body

    // Find all classes in same room
    const sameRoomClasses = await Class.find({
      room,
    })

    // Check only for same day and overlapping time
    const conflict = sameRoomClasses.find((existingClass) => {
      const sameDay = existingClass.day.some((existingDay) =>
        day.includes(existingDay)
      )

      if (!sameDay) return false // If no same day, skip

      return isTimeOverlap(
        parseTime(existingClass.start),
        parseTime(existingClass.end),
        parseTime(start),
        parseTime(end)
      )
    })

    if (conflict) {
      return res.status(400).send({
        error: `Time conflict detected with '${conflict.courseName}' in room ${room}.`,
      })
    }

    // No conflict → create class
    await Class.create(req.body)
    res.status(201).send({ ...req.body })
  } catch (error) {
    res.status(500).send({ error: error.message })
  }
})

classRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params

    const deletedClass = await Class.findByIdAndDelete(id)

    if (!deletedClass) {
      return res.status(404).send({ error: "Class not found" })
    }

    res
      .status(200)
      .send({ message: "Class deleted successfully!", deletedClass })
  } catch (error) {
    res.status(500).send({ error: error.message })
  }
})

export { classRouter }
