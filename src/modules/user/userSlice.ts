import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { User, UsersSliceType } from "./typings";

const initialState: UsersSliceType = {
  users: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadUsers: (state, action: PayloadAction<User[] | []>) => {
      state.users = action.payload;
    },
    updateUserData: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
  },
});

export const { loadUsers, updateUserData } = userSlice.actions;

export default userSlice.reducer;
