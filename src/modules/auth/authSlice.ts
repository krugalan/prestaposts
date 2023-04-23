import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { LoginResponse } from "./typings";

const initialState: LoginResponse = {
  token: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<LoginResponse>) => {
      state.token = action.payload.token;
      state.error = undefined;
    },
    authFailed: (
      state,
      action: PayloadAction<{ status: number; msg: string }>
    ) => {
      state.token = "";
      state.error = {
        code: action.payload.status,
        message: action.payload.msg,
      };
    },
  },
});

export const { login, authFailed } = authSlice.actions;

export default authSlice.reducer;
