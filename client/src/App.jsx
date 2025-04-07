import { useContext } from "react"
import "./App.css"

import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Schedule from "./components/Schedule"
import { NavContext } from "../context/NavContext"
import AddClass from "./components/AddClass"

function App() {
  const { activeNav } = useContext(NavContext)
  return (
    <div className="bg-[#EDF2F4] w-screen h-screen flex justify-center items-center">
      <div className="min-w-[600px]">
        <Header />
        <Navbar />
        <section className="h-[400px] bg-red-200">
          {activeNav === "schedule" && <Schedule />}
          {activeNav === "add" && <AddClass />}
        </section>
      </div>
    </div>
  )
}

export default App
