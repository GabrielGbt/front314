import { RouterProvider } from "react-router-dom"
import { routes } from "./routes"
import { GlobalStyles } from "./styles/globalStyles"

function App() {

  return (
    <>
      <RouterProvider router={routes} />
      <GlobalStyles />
    </>
  )
}

export default App
