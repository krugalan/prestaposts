import { useEffect } from "react";
import { useUsers } from "../../hooks/useUsers";
import { useSelector } from "react-redux";
import { selectUsers } from "./selectors";
import { UserCardFloat } from "./UserCard";
import { gridContainerHOC } from "../../components/layout/GridContainerHOC";
import "./styles.css";

export const Users = gridContainerHOC(() => {
  const { getAllUsers } = useUsers();
  const listUsers = useSelector(selectUsers);

  useEffect(() => {
    if (!listUsers.length) {
      getAllUsers();
    }
  }, []);

  return (
    <>
      {listUsers?.map((user) => (
        <UserCardFloat key={user.id} {...user} />
      ))}
    </>
  );
});
