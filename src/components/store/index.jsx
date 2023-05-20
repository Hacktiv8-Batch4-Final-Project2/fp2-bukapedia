import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./reducers/Login";
import productsReducer from "./reducers/Products";

export const store = configureStore({
    reducer: {
        login: loginReducer,
        products: productsReducer,
    }
});