import { useDispatch } from "react-redux"
import { cerrarSesion } from "../../features/usuariosSlice";
import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";

const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleOnCerrarSesion = ()=>{
        dispatch(cerrarSesion(""));
        navigate("/");
    }
    const handleOnRedirect= ()=>{
        navigate("/dashboard");
    }
  return (
    <Box sx={{display:'Flex', flexDirection:'column', alignItems:'center'}}>
      <h1>Esta seguro que desea cerrar sesion?</h1>
      <Button sx={{color:'white', background:'green'}} className="" onClick={handleOnCerrarSesion}>Si</Button>
      <Button sx={{color:'white', background:'red'}} className="" onClick={handleOnRedirect}>No</Button>
    </Box>
  )
}

export default Logout
