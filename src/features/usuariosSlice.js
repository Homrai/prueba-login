import { createSlice } from "@reduxjs/toolkit";

const initialState=[];

const usuarioSlice=createSlice({
    name: "usuario",
    initialState,
    reducers:{
        addUsuario: (state,action)=>{
            state[0]=action.payload;
        },
        cerrarSesion:(state,action)=>{
            state=initialState;
        }
    }
})

export default usuarioSlice.reducer;

export const {addUsuario, cerrarSesion}=usuarioSlice.actions;