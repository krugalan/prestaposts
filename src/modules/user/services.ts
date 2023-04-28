import { HttpClientUsers } from "../../api/HttpClient";
import { ENDP_USERS, STATUS_OK } from "../../constants";
import { toast } from "react-toastify";
import { UserUpdatePayload, Users } from "./typings";
import { toastCustom } from "../../utils/toastCustom";

export const getUsers = async (): Promise<Users> => {
  const response = await HttpClientUsers.get(ENDP_USERS)
    .then((response) => response.data.data)
    .catch(() => {
      toast("Error al obtener usuarios. Reintente en unos minutos.");
      return [];
    });
  return response;
};

export const getUserDetail = async (id: string): Promise<Users> => {
  const response = await HttpClientUsers.get(ENDP_USERS + `/${id}`)
    .then((response) => response.data.data)
    .catch(() => {
      toast("Error al obtener usuarios. Reintente en unos minutos.");
      return null;
    });
  return response;
};

export const updateUserById = async ({
  id,
  ...rest
}: UserUpdatePayload): Promise<any> => {
  const response = await HttpClientUsers.put(ENDP_USERS + `/${id}`, rest)
    .then((response) => (response.status === STATUS_OK ? response.data : false))
    .catch(() =>
      toast("Error al actualizar el usuario. Reintente en unos minutos.")
    );

  if (response) {
    toastCustom("Usuario actualizado con éxito");
    return response;
  } else {
    return false;
  }
};
