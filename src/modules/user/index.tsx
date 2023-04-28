import { useEffect } from "react";
import { useUsers } from "../../hooks/useUsers";
import { useSelector } from "react-redux";
import { selectUsers } from "./selectors";
import { GridContainer } from "../../components/layout/components";
import { UserCardFloat } from "./UserCard";

export const Users = () => {
  const { getAllUsers } = useUsers();
  const listUsers = useSelector(selectUsers);

  useEffect(() => {
    !listUsers?.length && getAllUsers();
  }, []);

  return (
    <GridContainer>
      {listUsers &&
        listUsers.map((user) => <UserCardFloat key={user.id} {...user} />)}
    </GridContainer>
  );
};
