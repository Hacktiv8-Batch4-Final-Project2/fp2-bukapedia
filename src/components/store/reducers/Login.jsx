import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
};

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        login: (state, action) => {
            const token = Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2);
            const isAdmin = {token: token, ...action.payload}
            state.user = action.payload;
            state.user.token = token
            localStorage.setItem("user", JSON.stringify(isAdmin));
        }
    }
});

export const { login } = loginSlice.actions;

export default loginSlice.reducer;