
import { Navigate, Outlet } from "react-router-dom"
import auth from "../utils/auth"

export default function ProtectedRoute(){
    // if(auth.isAuthenticated()) return <Navigate to='/' />;
    // return <Navigate to='/login' />
    return <Outlet />
}