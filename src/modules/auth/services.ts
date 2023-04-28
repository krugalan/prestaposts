import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { HttpClientUsers } from "../../api/HttpClient";
import { authFailed, login, logout } from "./authSlice";
import { LoginPayload } from "./typings";
import { LOGIN, STATUS_ERROR, STATUS_OK } from "../../constants";
import { loadingStatus } from "../session/sessionSlice";

export const loginService = (
  data: LoginPayload,
  dispatch: Dispatch<AnyAction>
) => {
  dispatch(loadingStatus(true));
  HttpClientUsers.post(LOGIN, data)
    .then(
      (response) =>
        response.status === STATUS_OK && dispatch(login(response.data))
    )
    .catch(({ response }) => {
      response.status === STATUS_ERROR &&
        dispatch(
          authFailed({ status: STATUS_ERROR, msg: response.data.error })
        );
    })
    .finally(() => dispatch(loadingStatus(false)));
};

export const logoutService = (dispatch: Dispatch<AnyAction>) =>
  dispatch(logout());
