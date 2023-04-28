import { useEffect } from "react";
import { GridContainer } from "../../components/layout/components";
import { usePosts } from "../../hooks/usePosts";
import { PostCardFloat } from "./PostCard";
import { Post } from "./typings";
import { useSelector } from "react-redux";
import { selectPosts } from "./selectors";

export const Posts = () => {
  const { getAllPosts } = usePosts();
  const listPosts = useSelector(selectPosts);

  useEffect(() => {
    !listPosts?.length && getAllPosts();
  }, []);

  return (
    <GridContainer>
      {listPosts?.map((el: Post) => (
        <PostCardFloat key={el.id} {...el} />
      ))}
    </GridContainer>
  );
};
