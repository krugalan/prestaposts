import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../config/store";

const selectAuthState = (state: RootState) => state.session;

export const selectSession = createSelector(selectAuthState, (auth) => auth);

export const selectLoading = createSelector(
  selectAuthState,
  (auth) => auth.loading
);
