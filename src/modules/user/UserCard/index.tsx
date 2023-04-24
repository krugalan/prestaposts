import { H4Text, PText } from "../../../components/layout";
import { UserCardContainer, UserCardImage } from "../components";
import { User } from "../typings";

export const UserCard = ({ avatar, first_name, last_name, email }: User) => {
  return (
    <UserCardContainer>
      <UserCardImage src={avatar} />
      <H4Text>
        {first_name} {last_name}
      </H4Text>
      <PText>{email}</PText>
      <PText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </PText>
    </UserCardContainer>
  );
};
