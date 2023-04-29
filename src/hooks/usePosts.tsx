import { loadPosts, loadPostsByUser } from "../modules/posts/postsSlice";
import { getPosts, getPostsById } from "../modules/posts/services";
import { loadingStatus } from "../modules/session/sessionSlice";
import { useDispatch } from "react-redux";

export const usePosts = () => {
  const dispatch = useDispatch();

  const getAllPosts = async () => {
    dispatch(loadingStatus(true));
    getPosts().then((data) => dispatch(loadPosts(data)));
    dispatch(loadingStatus(false));
  };

  const getPostsByUser = async (id: number) => {
    dispatch(loadingStatus(true));
    getPostsById(id.toString()).then((data) => dispatch(loadPostsByUser(data)));
    dispatch(loadingStatus(false));
  };

  return {
    getAllPosts,
    getPostsByUser,
  };
};
