import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import authAPI from "../../api/auth";
import { getUserInfo } from "../users/userSlice";
import {
  saveToLocalStorage,
  loadFromLocalStorage,
  removeFromLocalStorage,
} from "../../../utils/localstorage";
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

export const verifyEmail = createAsyncThunk(
  "auth/verify_email",
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
  async (payload, thunkApi) => {
    try {
      const response = await authAPI.logoutUser();
      const data = response.data;
      return data;
    } catch (error: any) {
      const message = error.message;
      return thunkApi.rejectWithValue(message);
    } finally {
      // localStorage.removeItem("ecommerce_user");
      removeFromLocalStorage("ecommerce_user");
    }
  }
);

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (data, thunkApi) => {
    try {
      const response = await axios.get<UserResponseProps>(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
      );
      return response.data;
    } catch (error: any) {
      const message = error.message;
      return thunkApi.rejectWithValue(message);
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
