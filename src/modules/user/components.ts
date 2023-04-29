import styled from "styled-components";
import { device } from "../../constants";

export const UserCardImage = styled.img`
  border-radius: 50%;
`;

// USER DETAIL
export const UsersDetailContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1 1fr);
  grid-template-rows: repeat(1 1fr);
  gap: 20px;
  grid-template-areas:
    "a"
    "b"
    "c";

  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 0.5fr 0.5 fr;
    grid-template-areas:
      "a b"
      "c c";
  }
`;
