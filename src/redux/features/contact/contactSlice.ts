import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import contactAPI from "../../api/contact";

import {
  ContactPayloadProps,
  ContactResponseProps,
} from "../../../types/types";
interface UserData {
  // Define the structure of your user data here
  acct_id: string;
  email: string;
}

export const addContact = createAsyncThunk(
  "contacts/add_contact",
  async (payload: ContactPayloadProps, thunkApi) => {
    console.log("my reg payload: ", payload);
    try {
      const response = await contactAPI.addContact(payload);
      const data = response.data;
      return data;
    } catch (error: any) {
      console.log("This is error message,lets see...", error);
      const message = error.response.data;
      return thunkApi.rejectWithValue(message);
    }
  }
);

interface ContactState {
  loading: boolean;
  error: string | null;
  data: ContactResponseProps | null;
  dashboard: any | null;
  userData: UserData;
}

const initialState = {
  loading: false,
  error: null,
  data: null,
  dashboard: null,
} as ContactState;

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(addContact.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(addContact.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default contactSlice.reducer;
