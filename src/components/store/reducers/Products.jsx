import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    products: [],
    cart: [],
    isLoading: false,
}

export const getProducts = createAsyncThunk("product/getproduct", async (data) => {
    console.log(data);
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
        addProduct: (state, action) => {
            state.products = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state, action) => {
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


export const { addProduct } = productsSlice.actions;

export default productsSlice.reducer;
