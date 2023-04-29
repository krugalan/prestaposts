import { H4Text, PText } from "../../../components/layout";
import { floatCardContainerHOC } from "../../../components/layout/FloatCardContainerHOC";
import { Post } from "../typings";

const PostCard = (item: Post) => {
  const { title, body } = item;

  return (
    <>
      <H4Text>{title}</H4Text>
      <PText>{body}</PText>
    </>
  );
};

export const PostCardFloat = floatCardContainerHOC(PostCard);
