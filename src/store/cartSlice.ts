import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../types/ProductTypes";

const initialState: ProductType[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action: PayloadAction<ProductType>) {
      state.push(action.payload);
    },
    remove(state, action: PayloadAction<number>) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
