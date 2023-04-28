import { UsersDetailContainer } from "../components";
import { UserCardDetail } from "../UserCardDetail";
import { PText } from "../../../components/layout";
import { useLocation } from "react-router-dom";
import { UserCardFloat } from "../UserCard";

export const UserDetail = () => {
  const { state } = useLocation();

  return (
    <>
      <PText>
        Here you are getting the user with a service. For that reason here the
        user is not updated.
      </PText>
      <UsersDetailContainer>
        <UserCardFloat {...state} />
        <UserCardDetail {...state} />
      </UsersDetailContainer>
    </>
  );
};
