import React from "react";
import { UsersDetailContainer } from "../components";
import { useLocation } from "react-router-dom";
import { UserCard } from "../UserCard";

export const UserDetail = () => {
  const { state } = useLocation();

  return (
    <UsersDetailContainer>
      <UserCard {...state} />
      <UserCard {...state} />
    </UsersDetailContainer>
  );
};
