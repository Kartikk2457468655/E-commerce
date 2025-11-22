import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("products", async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const jsonRes = await res.json(); 
  return jsonRes;
});

const initialState = {
  items: [],
  status: undefined,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      (state.status = "succeeded"), (state.items = action.payload);
    });
  },
});

export default productSlice.reducer;
