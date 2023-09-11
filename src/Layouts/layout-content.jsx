import { Link, Outlet } from "react-router-dom";
import logo from '../assets/logo.png'

const LayoutContent = ()=>{
    let userName = 'Admin';
    return(
    <>
        <header className="flex justify-between items-center bg-primary-blue p-4 text-secondary-gray h-[67.33px] min-w-[270px]">
            <div className="flex flex-col sm:flex-row justify-between sm:w-11/12 lg:w-full">
                <img className="w-32 ml-4" src={logo} alt="logo" />
                <p className="sm:text-xl">{userName}</p>
            </div>
            <div className="lg:hidden">
                <button id="open-sidebar" className="text-3xl"><i className="ri-menu-line"></i></button>
            </div>
        </header>
        <div id="container" className="flex h-[calc(100vh-67.33px)] min-w-[270px]">
            <div id="sidebar-overlay" className="hidden lg:hidden bg-black h-screen w-screen absolute top-0 left-0 opacity-90" />
            <div id="sidebar-overlay" className="hidden lg:hidden bg-black h-screen w-screen absolute top-0 left-0 opacity-90">
            </div>
            <aside id="sidebar"
                className="p-4 hidden lg:block text-secondary-gray font-medium lg:w-[250px] h-screen lg:h-full absolute lg:static top-0 left-0 bg-white shrink-0 overflow-auto w-[300px]">
                <h4 className="mb-3 font-semibold">Menu</h4>
                <div className="mb-2">
                    <a className="hover:text-secondary-blue" href="../dashboard/dashboard.html"><i
                            className="ri-home-2-line mr-2"></i>Dashboard</a>
                </div>
                <div className="space-y-2">
                    <details open className="space-y-2">
                        <summary className="hover:text-secondary-blue cursor-pointer list-none space-y-2"><i
                                className="ri-settings-5-fill mr-2"></i>Pengaturan<i className="ri-arrow-drop-down-line"></i>
                        </summary>
                        <div className="pl-6">
                            <a className="hover:text-secondary-blue" href="../administrator/list-admin.html"><i
                                    className="ri-user-settings-line mr-2"></i>Administrator</a>
                        </div>
                        <div className="pl-6">
                            <a href="../administrator/profile.html" className="hover:text-secondary-blue"><i className="ri-profile-line mr-2"></i>profil
                                hotel</a>
                        </div>
                    </details>
                    <details open className="space-y-2">
                        <summary className="hover:text-secondary-blue cursor-pointer list-none space-y-2"><i
                                className="ri-building-4-line mr-2"></i>Data Kamar<i className="ri-arrow-drop-down-line"></i>
                        </summary>
                        <div className="pl-6">
                            <Link to='/Kategori' className="hover:text-secondary-blue"><i className="ri-hotel-bed-line mr-2"></i>Kategori Kamar</Link>
                        </div>
                        <div className="pl-6">
                            <Link to='/Lantai' className="hover:text-secondary-blue"><i className="ri-hotel-bed-line mr-2"></i>Lantai Kamar</Link>
                        </div>
                        <div className="pl-6">
                            <a href="../kamar/list-kamar.html" className="hover:text-secondary-blue"><i className="ri-hotel-bed-line mr-2"></i>List
                                Kamar</a>
                        </div>
                    </details>
                    <details open className="space-y-2">
                        <summary className="hover:text-secondary-blue cursor-pointer list-none space-y-2"><i
                                className="ri-wallet-2-fill mr-2"></i>Transaksi<i className="ri-arrow-drop-down-line"></i></summary>
                        <div className="pl-6">
                            <a className="hover:text-secondary-blue" href="../transaksi/pesankamar.html"><i className="ri-notification-3-fill mr-2"></i>Pesan
                                Kamar</a>
                        </div>
                        <div className="pl-6">
                            <a href="../transaksi/check-in.html" className="hover:text-secondary-blue"><i
                                    className="ri-notification-3-fill mr-2"></i>Check
                                In</a>
                        </div>
                        <div className="pl-6">
                            <a href="../transaksi/check-out.html" className="hover:text-secondary-blue"><i className="ri-notification-3-fill mr-2"></i>Check
                                Out</a>
                        </div>
                    </details>
                </div>
                <div className="mt-2">
                    <a className="hover:text-secondary-blue" href="../Laporan/laporan.html"><i className="ri-folder-2-line mr-2"></i>Laporan</a>
                </div>
            </aside>
            <button id="close-sidebar" className="absolute top-[-3px] left-[260px] text-6xl hidden"><i
            className="ri-arrow-left-circle-fill bg-white rounded-full"></i></button>
            <Outlet />
        </div>
    </>
    )
}
export default LayoutContent;