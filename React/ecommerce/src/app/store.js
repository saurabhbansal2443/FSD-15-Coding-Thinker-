import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./ProductSlice";
import UserReducer from "./UserSlice";
export const store = configureStore({
  reducer: {
    product: ProductReducer,
    user: UserReducer,
  },
});
