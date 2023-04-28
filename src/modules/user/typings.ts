import { AnyAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";

export type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
  job?: string;
  updatedAt?: string;
};

export type UsersSliceType = {
  users: User[] | [];
};

export type Users = User[] | [];

export type UserUpdatePayload = {
  id: string;
  name?: string;
  job?: string;
  dispatch: Dispatch<AnyAction>;
};
