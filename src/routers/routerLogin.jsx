import { createBrowserRouter } from "react-router-dom";
import LayoutHotel from "../Layouts/layout-hotel";
import Login from "../Components/Login";
import Kategori from '../Components/Kategori/Kategori.jsx';
import LayoutContent from "../Layouts/layout-content.jsx";
import Dashboard from "../Components/Dashboard.jsx";
import ProfileHotel from "../Components/Profile-hotel.jsx";


export const routerLogin = createBrowserRouter([
    {
        path: '/login',
        element: <Login />,
    },
    // {
    //     path: '/dashboard',
    //     element: <LayoutContent />,
    //     children :[
    //         {
    //             path:'/dashboard',
    //             element: <Dashboard />
    //         },
    //         {
    //             path: '/profile',
    //             element: <ProfileHotel />
    //         },
    //         {
    //             path: '/kategori',
    //             element: <Kategori />
    //         }
    //     ]
    // }
])