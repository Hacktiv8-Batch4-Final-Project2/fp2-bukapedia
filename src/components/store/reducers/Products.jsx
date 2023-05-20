import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    products: [],
    cart: [],
    isLoading: false,
}

export const getProducts = createAsyncThunk("product/getproduct", async () => {
    try {
        const response = await axios.get("https://fakestoreapi.com/products");
        return response.data;
    } catch (error) {
        throw error
    }
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
            .addCase(getProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.products = action.payload;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.isLoading = false;
                console.log(action.payload);
            })
    }
})

export const { addProduct } = productsSlice.actions;

export default productsSlice.reducer;
