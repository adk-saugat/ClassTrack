import { createContext, useEffect, useReducer } from "react"
import axios from "axios"
import { toast } from "react-hot-toast"

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL

const classReducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case "CREATE_CLASS":
      return { ...state, classes: [...state.classes, payload] }
    case "GET_CLASS":
      return { ...state, classes: payload }
    case "DELETE_CLASS":
      return {
        ...state,
        classes: state.classes.filter((cls) => cls._id !== payload), // Remove the class with the matching _id
      }
    default:
      return state
  }
}

export const ClassContext = createContext({
  classes: [],
  dispatchClasses: () => {},
  addClass: () => {},
  deleteClass: () => {},
})

const ClassProvider = ({ children }) => {
  const [state, dispatchClasses] = useReducer(classReducer, { classes: [] })

  useEffect(() => {
    getAllClass()
  }, [])

  const getAllClass = async () => {
    try {
      const response = await axios.get("/class/")
      dispatchClasses({ type: "GET_CLASS", payload: response.data })
    } catch (error) {
      toast.error(error.response?.data?.error || "Failed to fetch classes")
    }
  }

  const addClass = async (classData) => {
    try {
      const response = await axios.post("/class/", classData)
      dispatchClasses({ type: "CREATE_CLASS", payload: response.data })
      toast.success("Class added successfully!")
      return true
    } catch (error) {
      toast.error(error.response?.data?.error || "Failed to add class")
    }
  }

  const deleteClass = async (_id) => {
    try {
      await axios.delete(`/class/${_id}`)
      dispatchClasses({ type: "DELETE_CLASS", payload: _id }) // Pass the _id as the payload
      toast.success("Class deleted successfully!")
    } catch (error) {
      toast.error(error.response?.data?.error || "Failed to delete class")
    }
  }

  return (
    <ClassContext.Provider
      value={{
        classes: state.classes,
        dispatchClasses,
        addClass,
        deleteClass,
      }}
    >
      {children}
    </ClassContext.Provider>
  )
}

export default ClassProvider
