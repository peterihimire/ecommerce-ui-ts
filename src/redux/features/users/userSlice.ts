import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import userAPI from "../../api/user";

interface UserData {
  acct_id: string;
  email: string;
  cart: {};
  orders: [];
  profile: {};
}
const userDataString = localStorage.getItem("ecommerce_user");
const userData: UserData | null = userDataString
  ? JSON.parse(userDataString)
  : null;

export const getUserInfo = createAsyncThunk(
  "users/user_info",
  async (_, thunkApi) => {
    try {
      const response = await userAPI.getUserInfo();
      const data = response.data;

      const ecmmUserData = JSON.parse(
        localStorage.getItem("ecommerce_user") || "{}"
      );

      const { cart, email, orders, profile, acctId } = response.data.data;

      const newUserData = {
        ...ecmmUserData,
        ...{ email, acctId, cart, orders, profile },
      };

      localStorage.setItem("ecommerce_user", JSON.stringify(newUserData));
      return data;
    } catch (error: any) {
      const message = error.message;
      return thunkApi.rejectWithValue(message);
    }
  }
);

interface UserState {
  loading: boolean;
  error: string | null;
  authenticated: boolean;
  userData: UserData;
}

const initialState = {
  loading: false,
  error: null,
  authenticated: !!userData,
  userData: userData,
} as UserState;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getUserInfo.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getUserInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload.data;
        state.authenticated = true;
      })
      .addCase(getUserInfo.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
