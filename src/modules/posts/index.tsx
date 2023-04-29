import { useEffect } from "react";
import { useSelector } from "react-redux";
import { usePosts } from "../../hooks/usePosts";
import { PostCardFloat } from "./PostCard";
import { Post } from "./typings";
import { selectPosts } from "./selectors";
import { gridContainerHOC } from "../../components/layout/GridContainerHOC";
import { User } from "../user/typings";

export const Posts = gridContainerHOC(({ id }: User) => {
  const { getAllPosts, getPostsByUser } = usePosts();
  const listPosts = useSelector(selectPosts);

  useEffect(() => {
    if (!listPosts?.length) {
      getAllPosts();
    }
  }, []);

  // useEffect(() => {
  //   getPostsByUser(id);
  // }, [id]);

  return (
    <>
      {listPosts?.length
        ? id
          ? listPosts
              .filter((el) => el.id === id)
              .map((el: Post) => <PostCardFloat key={el.id} {...el} />)
          : listPosts.map((el: Post) => <PostCardFloat key={el.id} {...el} />)
        : null}
    </>
  );
});
