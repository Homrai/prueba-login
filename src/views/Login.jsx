import { useState } from "react"
import { useDispatch } from "react-redux";
import { addUsuario } from "../features/usuariosSlice";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, Box, Button, Container, CssBaseline, Grid, TextField, ThemeProvider, Typography, createTheme } from "@mui/material";

const theme = createTheme();
const Login = () => {
    const initialState = {
        user: "admin",
        password: "admin"
    }
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [userLogin, setUserLogin] = useState(initialState);

    const handleOnChangeUser = (e) => {
        const { name, value } = e.target;
        setUserLogin(old => ({ ...old, [name]: value }));
    }
    const enviar = async () => {
        if (userLogin.user !== "admin" && userLogin.password !== "admin") {
            return
        }
        const datos = await fetch("https://pbakxq15qi.execute-api.us-west-2.amazonaws.com/testing", {
            method: 'POST',
            body: JSON.stringify(userLogin),
        });
        const res = await datos.json();
        if (res === "Usuario autenticado") {
            dispatch(addUsuario("admin"));
            navigate("/dashboard");
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    {/* <LockOutlinedIcon /> */}
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box component="form" noValidate sx={{ mt: 1 }}>
                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    placeholder="Usuario"
                    name="user"
                    value={userLogin.user} 
                    onChange={handleOnChangeUser}
                    autoFocus
                    />
                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    placeholder="password"
                    name="password"
                    value={userLogin.password} 
                    onChange={handleOnChangeUser}
                    type="password"
                    autoComplete="current-password"
                    />
                    <Button
                    fullWidth
                    onClick={enviar}
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    >
                    Sign In
                    </Button>
                </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default Login
