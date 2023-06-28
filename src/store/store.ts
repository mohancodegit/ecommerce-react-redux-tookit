import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";
import { ProductType } from "../types/ProductTypes";

export type StoreProps = {
  cart: ProductType[];
  products: ProductType[];
};

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: productSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
