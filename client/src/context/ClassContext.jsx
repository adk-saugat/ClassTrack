import { createContext, useContext, useEffect, useReducer } from "react"
import axios from "axios"
import { toast } from "react-hot-toast"
import { NavContext } from "./NavContext"

axios.defaults.baseURL = "http://localhost:8000"

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
        classes: state.classes.filter((cls) => cls._id !== payload),
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
  const { setActiveNav } = useContext(NavContext)

  useEffect(() => {
    getAllClass()
  }, [state.classes])

  const getAllClass = async () => {
    try {
      const response = await axios.get("/class/")
      dispatchClasses({ type: "GET_CLASS", payload: response.data })
    } catch (error) {
      toast.error(error.response.data.error)
    }
  }

  const addClass = async (classData) => {
    try {
      const response = await axios.post("/class/", classData)
      dispatchClasses({ type: "CREATE_CLASS", payload: classData })
      toast.success("Class added successfully!")
      return true
    } catch (error) {
      toast.error(error.response.data.error)
    }
  }

  const deleteClass = async (_id) => {
    try {
      const response = await axios.delete(`/class/${_id}`, {})
      dispatchClasses({ type: "DELETE_CLASS" })
    } catch (error) {
      toast.error(error.response.data.error)
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
