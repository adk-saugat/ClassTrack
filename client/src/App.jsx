import { useContext } from "react"
import "./App.css"

import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Auth from "./components/Auth"
import Schedule from "./components/Schedule"
import { NavContext } from "./context/NavContext"
import AddClass from "./components/AddClass"

function App() {
  const { activeNav } = useContext(NavContext)
  return (
    <div className="bg-[#EDF2F4] w-screen h-screen flex justify-center items-center font-roboto">
      <div className="w-[600px]">
        <Header />
        <Navbar />
        <section className="h-[400px] w-full border-2 box-border p-4 border-darkgray bg-lightwhite">
          {activeNav === "schedule" && <Schedule />}
          {activeNav === "add" && <AddClass />}
          {activeNav === "auth" && <Auth />}
        </section>
      </div>
    </div>
  )
}

export default App
