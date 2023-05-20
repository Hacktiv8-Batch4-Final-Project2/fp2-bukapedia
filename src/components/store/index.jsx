import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./reducers/Login";

export const store = configureStore({
    reducer: {
        login: loginReducer,
    }
});