import { createBrowserRouter } from "react-router-dom";

import LayoutContent from "../Layouts/layout-content.jsx";
import LayoutLogin from "../Layouts/layout-login.jsx";
import Kategori from '../Components/Kategori/Kategori.jsx';


export const routerHotel = createBrowserRouter([
    {
        path: '/',
        element: <LayoutLogin />
    },
    {
        path: '/',
        element: <LayoutContent />,
        children:[
            {
                path: '/kategori',
                element: <Kategori />
            }
        ]
    }
])