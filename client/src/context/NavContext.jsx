import { createContext, useState } from "react"

export const NavContext = createContext({
  activeNav: null,
  setActiveNav: () => {},
})

const NavProvider = ({ children }) => {
  const [activeNav, setActiveNav] = useState("schedule")

  const value = { activeNav, setActiveNav }

  return <NavContext.Provider value={value}>{children}</NavContext.Provider>
}

export default NavProvider
