import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import userSlice from "./features/users/userSlice";
import productSlice from "./features/products/productSlice";
import cartSlice from "./features/cart/cartSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    product: productSlice,
    cart: cartSlice,
  },
});

export default store;
