import styled from "styled-components";
import { device } from "../../constants";

export const Container = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;

  @media ${device.laptop} {
  }

  @media ${device.desktop} {
  }
`;

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  @media ${device.laptop} {
  }

  @media ${device.desktop} {
  }
`;

export const ContainerMenuItem = styled.div`
  text-align: center;
  padding: 10px;
  border-style: solid;
  border-radius: 10px;
  border-color: #66adbb;

  :hover {
    box-shadow: 4px 8px black;
    transition: ease 0.5s;
    cursor: pointer;
    background-color: #d25bff;
    color: white;
  }
  @media ${device.laptop} {
  }

  @media ${device.desktop} {
  }
`;
