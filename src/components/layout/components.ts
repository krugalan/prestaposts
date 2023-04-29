import styled from "styled-components";
import { device } from "../../constants";

export const Container = styled.div`
  height: 100vh;
  place-items: center;
  margin: 5%;

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
  width: 80%;
  margin: 5% 0 0 0;

  :hover {
    box-shadow: 4px 8px black;
    transition: ease 0.5s;
    cursor: pointer;
    background-color: #d25bff;
    color: white;
  }
  @media ${device.laptop} {
    width: 200px;
    margin: 20px 0 0 0;
  }

  @media ${device.desktop} {
  }
`;

export const ContainerMenuItemActive = styled.div`
  text-align: center;
  padding: 10px;
  border-style: solid;
  border-radius: 10px;
  border-color: #66adbb;
  width: 80%;
  margin: 5% 0 0 0;

  box-shadow: 4px 8px black;
  transition: ease 0.5s;
  cursor: pointer;
  background-color: #d25bff;
  color: white;

  @media ${device.laptop} {
    width: 200px;
    margin: 20px 0 0 0;
  }

  @media ${device.desktop} {
  }
`;

// Card Container

export const FloatCardContainer = styled.div`
  text-align: center;
  padding: 50px 10px;
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

// Grid 3 container
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 20px;

  @media ${device.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${device.desktop} {
  }
`;
