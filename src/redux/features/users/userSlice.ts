import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  createAction,
} from "@reduxjs/toolkit";
import userAPI from "../../api/user";

interface ProfileData {
  acct_id: string;
  email: string;
  first_name: string;
  last_name: string;
  is_verified: string;
  gender: string;
  phone: string;
  picture: string;
  title: string;
}

interface ProfilePicProps {
  picture: File;
}
interface UserData {
  acct_id: string;
  email: string;
  cart: {};
  orders: [];
  profile: ProfileData;
}

interface UserState {
  loading: boolean;
  error: string | null;
  authenticated: boolean;
  userData: UserData | null;
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

export const uploadProfilePic = createAsyncThunk(
  "users/upload/profile_picture",
  async (payload: FormData, thunkApi) => {
    console.log("my profile pics payload: ", payload);
    try {
      const response = await userAPI.uploadProfilePic(payload);
      const data = response.data;

      console.log("my profile pics response : ", data);
      return data;
    } catch (error: any) {
      console.log("This is error message,lets see...", error);
      const message = error.response.data;
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const updateUserDetails = createAsyncThunk(
  "users/upload/profile_picture",
  async (payload: any, thunkApi) => {
    console.log("my profile pics payload: ", payload);
    try {
      const response = await userAPI.updateUserInfo(payload);
      const data = response.data;

      console.log("my user detail infe response : ", data);
      return data;
    } catch (error: any) {
      console.log("This is error message,lets see...", error);
      const message = error.response.data;
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const resetUser = createAsyncThunk("users/resetUser", async () => {
  return null;
});

const initialState = {
  loading: false,
  error: null,
  authenticated: !!userData,
  userData: userData || null,
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
      })
      .addCase(resetUser.fulfilled, (state) => {
        state.userData = null;
        state.authenticated = false;
      });
  },
});

export default userSlice.reducer;
