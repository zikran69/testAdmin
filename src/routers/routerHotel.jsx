import { createBrowserRouter } from "react-router-dom";

import LayoutContent from "../Layouts/layout-content.jsx";
import LayoutLogin from "../Layouts/layout-login.jsx";
import Dashboard from "../Components/Dashboard.jsx";
import Kategori from '../Components/Kategori/Kategori.jsx';


export const routerHotel = createBrowserRouter([
    {
        path: '/',
        element: <LayoutContent />,
        children:[
            {
                path: '/',
                element: <Dashboard />
            },
            {
                path: '/kategori',
                element: <Kategori />
            }
        ]
    }
])