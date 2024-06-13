import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        userProfile: null,
    },
    reducers: {
        loginUser: (state, action) => {
            state.userProfile = action.payload;
        },
        logOut: () => {
            state.userProfile = null;
        }
    }
})

export const { loginUser, logOut } = userSlice.actions;

export default userSlice.reducer; 