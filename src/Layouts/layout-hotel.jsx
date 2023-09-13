import { Outlet, Link } from "react-router-dom";
import Login from "../Components/Login";

const LayoutHotel = ()=>{
    return(
        <div>
            <Outlet />
        </div>
    )
}

export default LayoutHotel;