import { useState } from "react"
import Login from "./Login.jsx"
import SignUp from "./SignUp.jsx"

function Auth() {
  const [showPage, setShowPage] = useState("login")
  return (
    <>
      {showPage === "login" && <Login setShowPage={setShowPage} />}
      {showPage === "signup" && <SignUp setShowPage={setShowPage} />}
    </>
  )
}

export default Auth
