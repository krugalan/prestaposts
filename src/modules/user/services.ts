import { HttpClientUsers } from "../../api/HttpClient";
import { USERS_LIST } from "../../constants";
import { toast } from "react-toastify";
import { User } from "./typings";

export type Users = User[] | [];

export const getUsers = async (): Promise<Users> => {
  const response = await HttpClientUsers.get(USERS_LIST)
    .then((response) => response.data.data)
    .catch(() => {
      toast("Error al obtener usuarios. Reintente en unos minutos.");
      return [];
    });
  return response;
};

export const getUserDetail = async (id: string): Promise<Users> => {
  const response = await HttpClientUsers.get(USERS_LIST + `/${id}`)
    .then((response) => response.data.data)
    .catch(() => {
      toast("Error al obtener usuarios. Reintente en unos minutos.");
      return null;
    });
  return response;
};
