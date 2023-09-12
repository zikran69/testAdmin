import { createBrowserRouter } from "react-router-dom";
import LayoutLogin from '../Layouts/layout-login.jsx'
import LayoutContent from "../Layouts/layout-content.jsx";

export const router = createBrowserRouter([
    {
        path: '/login',
        element: <LayoutLogin />,
    },
    {
        path: '/',
        element: <LayoutLogin />,
    },
    {
        path: '/dashboard',
        element: <LayoutContent />,
        // children: [
        //     {
        //         path: '/dashboard',
        //         element: <Dashboard />
        //     },
        //     {
        //         path: '/profile',
        //         element: <ProfileHotel />
        //     },
        //     {
        //         path: '/kategori',
        //         element: <Kategori />
        //     }
        // ]
    }
])