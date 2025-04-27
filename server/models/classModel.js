import mongoose from "mongoose"

const classSchema = new mongoose.Schema({
  courseName: {
    type: String,
    required: true,
    trim: true,
  },
  crn: {
    type: Number,
    unique: true,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  room: {
    type: Number,
    required: true,
    trim: true,
  },
  instructor: {
    type: String,
    required: true,
    trim: true,
  },
  start: {
    type: String,
    required: true,
    trim: true,
  },
  end: {
    type: String,
    required: true,
    trim: true,
  },
  credit: {
    type: Number,
    required: true,
    trim: true,
  },
  day: [
    {
      type: String,
      required: true,
      trim: true,
    },
  ],
})

const Class = mongoose.model("Class", classSchema)

export default Class
