import { Routes,Route } from "react-router-dom";

import ProtectedRoute from "./protected-route";
import PrivateRoute from "./private-route";

import LoginPage from "../Components/pages/login-page";
import DashboardPage from "../Components/pages/dashboard-pages";
import ProfilePage from "../Components/pages/profile-page";
import KategoriKamarPage from "../Components/pages/kategori-kamar-page";
import LantaiKamarPage from "../Components/pages/lantai-kamar-page";
import ListKamarPage from "../Components/pages/list-kamar-page";
import PesanKamarPage from "../Components/pages/pesan-kamar-page";
import LaporanPage from "../Components/pages/laporan-page";

export default function Router(){
    return(
        <Routes>
            <Route>
                <Route path="/" element={<ProtectedRoute />}>
                    <Route path="/login" element={<LoginPage />} />
                </Route>
                <Route path="/" element={<PrivateRoute />}>
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="profile" element={<ProfilePage />} />
                    <Route path="/kategori-kamar" element={<KategoriKamarPage />} />
                    <Route path="/lantai-kamar" element={<LantaiKamarPage />} />
                    <Route path="list-kamar" element={<ListKamarPage />} />
                    <Route path="/pesan-kamar" element={<PesanKamarPage />} />
                    <Route path="laporan" element={<LaporanPage />} />
                </Route>
            </Route>
        </Routes>
    )
}