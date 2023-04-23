import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { SessionResponse } from "./typings";

const initialState: SessionResponse = {
  loading: false,
};

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    loadingStatus: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { loadingStatus } = sessionSlice.actions;

export default sessionSlice.reducer;
