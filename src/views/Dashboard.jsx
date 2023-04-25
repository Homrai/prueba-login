import { AppBar, Toolbar, Typography } from "@mui/material"
import { Link, Outlet } from "react-router-dom"

const Dashboard = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h5"
            noWrap
            sx={{
              display: { xs: 'flex'},
              flexGrow: 3,
              fontFamily: 'cursive',
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
            }}
          >
            <Link to={"/dashboard"} className="titulos-dashboard" >Inicio</Link>
          </Typography>   
          <Typography
            variant="h5"
            noWrap
            sx={{
              display: { xs: 'flex'},
              flexGrow: 3,
              fontFamily: 'cursive',
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
            }}
          >
            <Link to={"chat"} className="titulos-dashboard" >Chat</Link>
          </Typography>  
          <Typography
            variant="h5"
            noWrap
            sx={{
              display: { xs: 'flex'},
              flexGrow: 0,
              fontFamily: 'cursive',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Link  to={"logout"} className="titulos-dashboard" >Logout</Link>
          </Typography>       
        </Toolbar>
    </AppBar>
      
      <Outlet/>
    </div>
  )
}

export default Dashboard
