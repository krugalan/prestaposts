import { getUsers, updateUserById } from "../modules/user/services";
import { loadingStatus } from "../modules/session/sessionSlice";
import { useDispatch } from "react-redux";
import { loadUsers } from "../modules/user/userSlice";
import { UserUpdatePayload } from "../modules/user/typings";

export const useUsers = () => {
  const dispatch = useDispatch();

  const getAllUsers = async () => {
    dispatch(loadingStatus(true));
    getUsers().then((data) => dispatch(loadUsers(data)));
    dispatch(loadingStatus(false));
  };

  const updateUser = async (dataPayload: UserUpdatePayload) => {
    dispatch(loadingStatus(true));
    updateUserById(dataPayload);
    dispatch(loadingStatus(false));
  };

  return {
    getAllUsers,
    updateUser,
  };
};
