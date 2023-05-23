import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    user: null,
};

export const userLogin = createAsyncThunk("login/userLogin", async (data) => {
    try {
        const response = await axios.post("https://fakestoreapi.com/auth/login",{
            username: data.username, password: data.password 
        });
        return response.data;
    } catch (error) {
        throw error;
    }
});

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
    },
    extraReducers: (builder) => {
        builder
            .addCase(userLogin.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(userLogin.fulfilled, (state, action) => {
                console.log(action.payload);
                state.isLoading = false;
                state.user = action.payload;
                localStorage.setItem("user", JSON.stringify(action.payload));
            })
            .addCase(userLogin.rejected, (state, action) => {
                state.isLoading = false;
                console.log(action.payload);
            })
    }
});

export const { login } = loginSlice.actions;

export default loginSlice.reducer;