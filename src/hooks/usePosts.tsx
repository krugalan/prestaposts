import { loadPosts } from "../modules/posts/postsSlice";
import { getPosts } from "../modules/posts/services";
import { loadingStatus } from "../modules/session/sessionSlice";
import { useDispatch } from "react-redux";

export const usePosts = () => {
  const dispatch = useDispatch();

  const getAllPosts = async () => {
    dispatch(loadingStatus(true));
    getPosts().then((data) => {
      console.log(data);
      dispatch(loadPosts(data));
    });
    dispatch(loadingStatus(false));
  };

  return {
    getAllPosts,
  };
};
