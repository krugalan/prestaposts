import { useEffect } from "react";
import { useUsers } from "../../hooks/useUsers";
import { UserCard } from "./UserCard";
import { UsersContainer } from "./components";
import { useSelector } from "react-redux";
import { selectUsers } from "./selectors";

export const Users = () => {
  const { getAllUsers } = useUsers();
  const listUsers = useSelector(selectUsers);

  useEffect(() => {
    !listUsers?.length && getAllUsers();
  }, []);

  return (
    <UsersContainer>
      {listUsers &&
        listUsers.map((user) => <UserCard key={user.id} {...user} />)}
    </UsersContainer>
  );
};
