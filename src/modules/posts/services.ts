import { Post } from "./typings";
import { HttpPosts } from "../../api/HttpClient";
import { ENDP_POSTS } from "../../constants";
import { toastCustom } from "../../utils/toastCustom";

export const getPosts = async (): Promise<Post[] | []> => {
  const response = await HttpPosts.get(ENDP_POSTS)
    .then((response) => response.data)
    .catch(() => {
      toastCustom("Error al obtener posts. Reintente en unos minutos.");
      return [];
    });
  return response;
};

export const getPostsById = async (id: string): Promise<any> => {
  const response = await HttpPosts.get(ENDP_POSTS + `/${id}`)
    .then((response) => response.data)
    .catch(() =>
      toastCustom("Error al actualizar el usuario. Reintente en unos minutos.")
    );
  return response;
};
