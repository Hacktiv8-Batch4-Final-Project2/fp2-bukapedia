import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    products: [],
    cart: [],
    isLoading: false,
}

export const getProducts = createAsyncThunk("product/getproduct", async (data) => {
    if (!data) {
        try {
            console.log("masuk");
            const response = await axios.get("https://fakestoreapi.com/products");
            return response.data;
        } catch (error) {
            throw error
        }
    }
    return data;
});

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            let item = state.cart.find((item) => item.id === action.payload.id);
            if (item) {
                item.quantity++;
                state.cart = [...state.cart];
                localStorage.setItem('cart', JSON.stringify(state.cart));
            } else {
                action.payload = { ...action.payload, quantity: 1 };
                state.cart = [...state.cart, action.payload];
                localStorage.setItem('cart', JSON.stringify(state.cart));
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                action.payload.forEach((item) => {
                    if (!item.qty) {
                        const qty = Math.floor(Math.random() * 10) + 1;
                        item.qty = qty;
                    }
                })
                localStorage.setItem('products', JSON.stringify(action.payload));
                state.products = action.payload;
                state.isLoading = false;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.isLoading = false;
                console.log(action.payload);
            })
    }
})

export const { addToCart } = productsSlice.actions;

export default productsSlice.reducer;
