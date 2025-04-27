import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.jsx"

import NavProvider from "./context/NavContext.jsx"
import ClassProvider from "./context/ClassContext.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClassProvider>
      <NavProvider>
        <App />
      </NavProvider>
    </ClassProvider>
  </StrictMode>
)
