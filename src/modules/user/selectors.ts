import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../config/store";

const selectUserState = (state: RootState) => state.user;

export const selectUsers = createSelector(
  selectUserState,
  (user) => user.users
);
