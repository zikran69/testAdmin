import { RouterProvider } from "react-router-dom"
import { routerHotel } from "./routers/routerHotel.jsx"
import {router} from './routers/router.jsx'

function App() {
  return (
    <>
      <RouterProvider router={routerHotel}>
      </RouterProvider>
    </>
  )
}

export default App
