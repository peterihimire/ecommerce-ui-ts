import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import cartAPI from "../../api/cart";
import { CartPayloadProps, CartDataProps } from "../../../types/types";

interface UserData {
  // Define the structure of your user data here
  acct_id: string;
  email: string;
}

const userDataString = localStorage.getItem("ecommerce_user");

const userData: UserData | null = userDataString
  ? JSON.parse(userDataString)
  : null;

interface CartState {
  loading: boolean;
  error: string | null;
  authenticated: boolean;
  cartData: CartDataProps | null;
}

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (payload: CartPayloadProps, thunkApi) => {
    console.log("my add to cart payload: ", payload);
    try {
      const response = await cartAPI.addToCart(payload);
      const data = response.data;
      return data;
    } catch (error: any) {
      console.log("This is error message,lets see...", error);
      const message = error.response.data;
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const getCart = createAsyncThunk("cart/getCart", async (_, thunkApi) => {
  try {
    const response = await cartAPI.getCart();
    const data = response.data;
    return data;
  } catch (error: any) {
    console.log("This is error message,lets see...", error);
    const message = error.response.data;
    return thunkApi.rejectWithValue(message);
  }
});

export const updateCart = createAsyncThunk(
  "cart/updateCart",
  async (payload: CartPayloadProps, thunkApi) => {
    console.log("my add to cart payload: ", payload);
    try {
      const response = await cartAPI.updateCart(payload);
      const data = response.data;
      return data;
    } catch (error: any) {
      console.log("This is error message,lets see...", error);
      const message = error.response.data;
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const deleteCart = createAsyncThunk(
  "cart/deleteCart",
  async (payload: CartPayloadProps, thunkApi) => {
    console.log("my add to cart payload: ", payload);
    try {
      const response = await cartAPI.deleteCartProd(payload);
      const data = response.data;
      return data;
    } catch (error: any) {
      console.log("This is error message,lets see...", error);
      const message = error.response.data;
      return thunkApi.rejectWithValue(message);
    }
  }
);

const initialState: CartState = {
  loading: false,
  error: null,
  authenticated: !!userData,
  cartData: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(addToCart.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(addToCart.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(getCart.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cartData = action.payload;
        state.authenticated = true;
      })
      .addCase(getCart.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(updateCart.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(updateCart.fulfilled, (state) => {
        state.loading = false;
        state.authenticated = false;
      })
      .addCase(updateCart.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default cartSlice.reducer;
