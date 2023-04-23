import styled from "styled-components";
import { device } from "../../../constants";

export const ContainerForm = styled.div`
  background-color: #ffffff;
  height: auto;
  max-height: 450px;
  min-width: 270px;
  place-self: center;
  width: 90%;

  @media ${device.laptop} {
    width: 40vw;
  }

  @media ${device.desktop} {
  }
`;

export const ContentForm = styled.div`
  place-self: center;
  margin: 5%;
  @media ${device.laptop} {
    margin: 10%;
  }

  @media ${device.desktop} {
  }
`;

export const FormInput = styled.form``;
