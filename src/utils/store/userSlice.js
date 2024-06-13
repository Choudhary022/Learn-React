import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"user",
    initialState:{
        userProfile:null,
    },
    reducers:{
        loginUser:(state,action)=>{
            console.log("user logIn : ",action.payload);
            state.userProfile=action.payload;
        },
        logOut:(state,action)=>{
            state.userProfile=null;
        }
    }
})

export const { loginUser,logOut}=userSlice.actions;

export default userSlice.reducer; 