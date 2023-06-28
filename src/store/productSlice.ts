import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ProductState } from "../types/ProductTypes";

const initialState: ProductState = {
  loading: false,
  data: [],
  error: false,
  errorMessage: "",
};

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    return res.json();
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchProducts.fulfilled,
      (state, action: PayloadAction<any[]>) => {
        (state.loading = false),
          (state.data = action.payload),
          (state.error = false);
      }
    );
    builder.addCase(fetchProducts.rejected, (state, action) => {
      (state.loading = false), (state.data = []), (state.error = true);
      state.errorMessage = action.error.message ?? "Something went wrong";
    });
  },
});

export default productSlice.reducer;
