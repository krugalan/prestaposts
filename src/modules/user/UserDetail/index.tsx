import React from "react";
import { UsersDetailContainer } from "../components";
import { useLocation } from "react-router-dom";
import { UserCard } from "../UserCard";
import { UserCardDetail } from "../UserCardDetail";
import { PText } from "../../../components/layout";

export const UserDetail = () => {
  const { state } = useLocation();

  return (
    <>
      <PText>
        Here you are getting the user with a service. For that reason here the
        user is not updated.
      </PText>
      <UsersDetailContainer>
        <UserCard {...state} />
        <UserCardDetail {...state} />
      </UsersDetailContainer>
    </>
  );
};
