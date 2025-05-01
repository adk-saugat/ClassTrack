import { createContext, useEffect, useReducer } from "react"
import axios from "axios"

axios.defaults.baseURL = "http://localhost:8000"

const classReducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case "CREATE_CLASS":
      return { ...state, classes: [...state.classes, payload] }
    case "GET_CLASS":
      return { ...state, classes: payload }
    default:
      return state
  }
}

export const ClassContext = createContext({
  classes: [],
  dispatchClasses: () => {},
  addClass: () => {},
})

const ClassProvider = ({ children }) => {
  const [state, dispatchClasses] = useReducer(classReducer, { classes: [] })

  useEffect(() => {
    getAllClass()
  }, [])

  const getAllClass = async () => {
    try {
      const response = await axios.get("/class/")
      console.log(response.data)
      dispatchClasses({ type: "GET_CLASS", payload: response.data })
    } catch (error) {
      console.log(error.message)
    }
  }

  const addClass = async (classData) => {
    try {
      const response = await axios.post("/class/", classData)
      dispatchClasses({ type: "CREATE_CLASS", payload: classData })
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <ClassContext.Provider
      value={{
        classes: state.classes,
        dispatchClasses,
        addClass,
      }}
    >
      {children}
    </ClassContext.Provider>
  )
}

export default ClassProvider
