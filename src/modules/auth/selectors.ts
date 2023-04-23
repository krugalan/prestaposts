import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../config/store";

const selectAuthState = (state: RootState) => state.auth;

export const selectIsLoggedIn = createSelector(selectAuthState, (auth) => auth);

export const selectLoginToken = createSelector(
  selectAuthState,
  (auth) => auth.token
);

export const selectLoginError = createSelector(
  selectAuthState,
  (auth) => auth?.error
);
