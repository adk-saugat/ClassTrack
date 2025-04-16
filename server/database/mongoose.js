import mongoose from "mongoose"
import "dotenv/config"

try {
  mongoose.connect(process.env.MONGO_URI)
  console.log("Database Connected!")
} catch (error) {
  throw new Error({ error: "Database not Connected!" })
}
