import { createBrowserRouter } from "react-router-dom";

import LayoutContent from "../Layouts/layout-content.jsx";
import Dashboard from "../Components/Dashboard.jsx";
import ProfileHotel from "../Components/Profile-hotel.jsx";
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
                path: '/profile',
                element: <ProfileHotel />
            },
            {
                path: '/kategori',
                element: <Kategori />
            }
        ]
    }
])