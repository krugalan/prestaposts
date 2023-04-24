import styled from "styled-components";
import { device } from "../../constants";

export const UsersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 20px;
  width: 80%;
  height: 100vh;
  margin: 5% 0;

  @media ${device.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${device.desktop} {
  }
`;

export const UserCardContainer = styled.div`
  text-align: center;
  padding: 10px;
  border-style: solid;
  border-radius: 10px;
  border-color: #66adbb;

  :hover {
    box-shadow: 5px 13px;
    transition: ease 0.5s;
    cursor: pointer;
  }

  @media ${device.laptop} {
  }

  @media ${device.desktop} {
  }
`;

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
