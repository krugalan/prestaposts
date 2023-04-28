import { useEffect, useState } from "react";
import { Users, getUsers } from "../modules/user/services";
import { loadingStatus } from "../modules/session/sessionSlice";
import { useDispatch } from "react-redux";

export const useUsers = () => {
  const dispatch = useDispatch();
  const [listUsers, setListUsers] = useState<Users>([]);

  useEffect(() => {
    const getAllUsers = async () => {
      dispatch(loadingStatus(true));
      getUsers().then(setListUsers);

      dispatch(loadingStatus(false));
    };
    getAllUsers();
  }, [dispatch]);

  return {
    listUsers,
  };
};
