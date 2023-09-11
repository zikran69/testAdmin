import { createBrowserRouter } from "react-router-dom";
import Kategori from '../components/Kategori.jsx';
import Layout from "../Layouts/Layout.jsx";


export const routerHotel = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children:[
            {
                path: '/kategori',
                element: <Kategori />
            }
        ]
    }
])