import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const Auth=()=>{
    const user = useSelector(state=>state.usuario);
    if (user[0]!=="admin") { 
        return <Navigate to={"/"}/>
    }
    return <Outlet/>
}

export default Auth;