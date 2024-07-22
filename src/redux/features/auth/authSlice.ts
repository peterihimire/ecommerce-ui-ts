import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import authAPI from "../../api/auth";
import { getUserInfo } from "../users/userSlice";
import { getCart } from "../cart/cartSlice";
import { resetUser } from "../users/userSlice";
import { resetCart } from "../cart/cartSlice";
import {
  saveToLocalStorage,
  loadFromLocalStorage,
  removeFromLocalStorage,
} from "../../../utils/LocalStorage";
import {
  UserPayloadProps,
  UserResponseProps,
  VerifyPayloadProps,
} from "../../../types/types";
interface UserData {
  // Define the structure of your user data here
  acct_id: string;
  email: string;
}

interface UserState {
  loading: boolean;
  error: string | null;
  authenticated: boolean;
  userData: UserData;
}

const userDataString = localStorage.getItem("ecommerce_user");
// const userDataString = loadFromLocalStorage("ecommerce_user");

const userData: UserData | null = userDataString
  ? JSON.parse(userDataString)
  : null;

export const registerUser = createAsyncThunk(
  "auth/register",
  async (payload: UserPayloadProps, thunkApi) => {
    console.log("my reg payload: ", payload);
    try {
      const response = await authAPI.registerUser(payload);
      const data = response.data;
      return data;
    } catch (error: any) {
      console.log("This is error message,lets see...", error);
      const message = error.response.data;
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const authGoogle = createAsyncThunk(
  "auth/google-auth",
  async (user: any, thunkApi) => {
    try {
      // Directly use the received user data
      console.log("This should be user response...", user);

      // Save user data to local storage
      saveToLocalStorage("ecommerce_user", user);

      // const user = JSON.parse(localStorage.getItem("ecommerce_user") || "{}");
      // const response = await authAPI.googleAuth(user); // Pass user if needed
      // const data = response.data;
      // const response = await authAPI.authGoogle(); // This should be the API call for Google authentication
      // const data = response.data;
      // console.log("This should be user response...", user);
      // saveToLocalStorage("ecommerce_user", user);

      await thunkApi.dispatch(getUserInfo());
      await thunkApi.dispatch(getCart());

      console.log("my google auth resopsen: ", user);

      return user;
    } catch (error: any) {
      const message = error?.response?.data?.message;
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const verifyEmail = createAsyncThunk(
  "auth/verify-email",
  async (payload: VerifyPayloadProps, thunkApi) => {
    console.log("my verify payload: ", payload);
    try {
      const response = await authAPI.verifyEmail(payload);
      const data = response.data;
      return data;
    } catch (error: any) {
      console.log("This is error message,lets see...", error);
      const message = error.response.data;
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (payload: UserPayloadProps, thunkApi) => {
    console.log("My login payload: ", payload);
    try {
      const response = await authAPI.loginUser(payload);
      const data = response.data;

      // localStorage.setItem("ecommerce_user", JSON.stringify(data.data));
      saveToLocalStorage("ecommerce_user", data.data);

      await thunkApi.dispatch(getUserInfo());
      await thunkApi.dispatch(getCart());

      return data;
    } catch (error: any) {
      console.log("Error yeah: ", error.response);
      const message = error?.response?.data?.message;
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "users/logout",
  async (_, thunkApi) => {
    try {
      const response = await authAPI.logoutUser();
      const data = response.data;

      await thunkApi.dispatch(resetUser());
      await thunkApi.dispatch(resetCart());

      return data;
    } catch (error: any) {
      const message = error.message;
      return thunkApi.rejectWithValue(message);
    } finally {
      localStorage.removeItem("ecommerce_user");
      // removeFromLocalStorage("ecommerce_user");
    }
  }
);

const initialState = {
  loading: false,
  error: null,
  authenticated: !!userData,
} as UserState;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(registerUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(loginUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.authenticated = true;
      })
      .addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(authGoogle.pending, (state) => {
        state.loading = true;
      })
      .addCase(authGoogle.fulfilled, (state, action) => {
        state.loading = false;
        state.authenticated = true;
        // state.user = action.payload.data;
      })
      .addCase(authGoogle.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(logoutUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.loading = false;
        state.authenticated = false;
      })
      .addCase(logoutUser.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
