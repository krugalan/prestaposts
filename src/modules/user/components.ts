import styled from "styled-components";
import { device } from "../../constants";

export const UserCardImage = styled.img`
  border-radius: 50%;

  @media ${device.laptop} {
  }

  @media ${device.desktop} {
  }
`;

export const UserCardTitle = styled.div`
  @media ${device.laptop} {
  }

  @media ${device.desktop} {
  }
`;

export const UserCardDescription = styled.div`
  @media ${device.laptop} {
  }

  @media ${device.desktop} {
  }
`;

// USER DETAIL
export const UsersDetailContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 20px;
  width: 80%;
  height: 100vh;
  margin: 5% 0;

  @media ${device.laptop} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.desktop} {
  }
`;
