import { IoCalendarNumberOutline } from "react-icons/io5"
import { IoIosAdd } from "react-icons/io"
import { useContext } from "react"
import { NavContext } from "../../context/NavContext"

function Navbar() {
  const { setActiveNav } = useContext(NavContext)
  return (
    <nav className="flex justify-between w-full">
      <div className="flex">
        <span
          onClick={() => setActiveNav("schedule")}
          className="flex items-center gap-1 hover:bg-[#2B2D42] hover:text-white px-4 py-1 cursor-pointer duration-100"
        >
          <IoCalendarNumberOutline size={20} />
          <a className="font-semibold text-lg">Schedule</a>
        </span>
        <span
          onClick={() => setActiveNav("add")}
          className="flex items-center hover:bg-[#2B2D42] hover:text-white px-4 py-1 cursor-pointer duration-100"
        >
          <IoIosAdd size={30} />
          <a className="font-semibold text-lg">Add</a>
        </span>
      </div>
      <span
        onClick={() => setActiveNav("add")}
        className="flex items-center hover:bg-[#2B2D42] hover:text-white px-4 py-1 cursor-pointer duration-100"
      >
        <a className="font-semibold text-lg">Login</a>
      </span>
    </nav>
  )
}

export default Navbar
