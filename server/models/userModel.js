import mongoose from "mongoose"
import validator from "validator"

const UserSchema = new mongoose.Schema({
  displayName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error({ error: "Should be a valid email!" })
      }
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minLength: 7,
  },
  token: {
    type: String,
    trim: true,
  },
})

const User = mongoose.model("User", UserSchema)

export { User }
