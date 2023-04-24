import { useUsers } from "../../hooks/useUsers";
import { UserCard } from "./UserCard";
import { UsersContainer } from "./components";

export const Users = () => {
  const { listUsers } = useUsers();

  return (
    <UsersContainer>
      {listUsers?.map((user) => (
        <UserCard key={user.id} {...user} />
      ))}
    </UsersContainer>
  );
};
