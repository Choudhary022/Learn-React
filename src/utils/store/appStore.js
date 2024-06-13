// import { useReducer } from "react";
import cartReducer from "./cartSlice"
import userReducer from "./userSlice";


const { configureStore } = require("@reduxjs/toolkit");

const appStore=configureStore({
    reducer:{
        cart:cartReducer,
        user:userReducer
    }
});


export default appStore;