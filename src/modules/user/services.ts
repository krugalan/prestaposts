import { HttpClientUsers } from "../../api/HttpClient";
import { LIST_USERS } from "../../constants";
import { toast } from "react-toastify";
import { User } from "./typings";

export type Users = User[] | [];

export const getUsers = async (): Promise<Users> => {
  const response = await HttpClientUsers.get(LIST_USERS)
    .then((response) => response.data.data)
    .catch(() => {
      toast("Error al obtener usuarios. Reintente en unos minutos.");
      return [];
    });
  return response;
};
