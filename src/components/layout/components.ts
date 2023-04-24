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
