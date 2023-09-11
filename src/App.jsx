import { RouterProvider } from "react-router-dom"
import { routerHotel } from "./routers/routerHotel"

function App() {
  return (
    <>
      <RouterProvider router={routerHotel}>
      </RouterProvider>
    </>
  )
}

export default App
