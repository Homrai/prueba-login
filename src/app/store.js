import { configureStore } from "@reduxjs/toolkit";
import usuarioReducer from "../features/usuariosSlice";
export const store = configureStore({
    reducer:{
        usuario:usuarioReducer,
    }
});