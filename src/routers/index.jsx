import { Routes,Route } from "react-router-dom";

import ProtectedRoute from "./protected-route";
import LoginPage from "../Components/pages/login-page";

import PrivateRoute from "./private-route";
import Dashboard from "../Components/Dashboard";
import Kategori from "../Components/Kategori/Kategori";

export default function Router(){
    return(
        <Routes>
            <Route>
                <Route path="/" element={<ProtectedRoute />}>
                    <Route path="/login" element={<LoginPage />} />
                </Route>
                <Route path="/" element={<PrivateRoute />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/kategori" element={<Kategori />} />
                </Route>
            </Route>
        </Routes>
    )
}