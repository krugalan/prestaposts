import { UsersDetailContainer } from "../components";
import { UserCardDetail } from "../UserCardDetail";
import { PText } from "../../../components/layout";
import { useLocation } from "react-router-dom";
import { UserCardFloat } from "../UserCard";
import { Posts } from "../../posts";

export const UserDetail = () => {
  const { state } = useLocation();

  return (
    <>
      <PText>
        Here you are getting the user with a service. For that reason here the
        user is not updated.
      </PText>

      <UsersDetailContainer>
        <div className="a">
          <UserCardFloat {...state} />
        </div>
        <div className="b">
          <UserCardDetail {...state} />
        </div>
        <div className="c">
          <Posts {...state} />
        </div>
      </UsersDetailContainer>
    </>
  );
};
