// services/authService.js
import { AppDispatch } from "../../store.config";
import { resetUser, getUserInfo } from "../users/userSlice";
import { resetCart, getCart } from "../cart/cartSlice";

export const handleLogin = async (dispatch: AppDispatch) => {
  // await thunkApi.dispatch(resetUser());
  // await thunkApi.dispatch(resetCart());
  await dispatch(getUserInfo() as any);
  await dispatch(getCart() as any);
};

export const handleLogout = async (dispatch: AppDispatch) => {
  // await thunkApi.dispatch(resetUser());
  // await thunkApi.dispatch(resetCart());
  await dispatch(resetUser() as any);
  await dispatch(resetCart() as any);
};
