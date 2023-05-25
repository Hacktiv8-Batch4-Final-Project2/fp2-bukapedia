import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    user: {
        admin: false,
        token: null,
        username: null,
        password: null,
    },
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
        },
        setToken: (state, action) => {
            console.log(state.user);
            state.user.token = action.payload.token
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(userLogin.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(userLogin.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
                localStorage.setItem("user", JSON.stringify(action.payload));
            })
            .addCase(userLogin.rejected, (state, action) => {
                state.isLoading = false;
            })
    }
});

export const { login, setToken } = loginSlice.actions;

export default loginSlice.reducer;