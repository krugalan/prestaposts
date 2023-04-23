import styled from "styled-components";
import { device } from "../../constants";

export const LoginContainer = styled.div`
  background-color: rgb(48, 100, 150);
  margin: 0;
  height: 100vh;
  width: auto;
  display: grid;

  @media ${device.laptop} {
  }

  @media ${device.desktop} {
  }
`;

export const H1Text = styled.h1`
  color: #585858;
  text-align: center;
`;

export const H4Text = styled.h4`
  color: #585858;
  text-align: center;
`;

export const PText = styled.p`
  color: #585858;
  text-align: center;
`;

export const InputText = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
`;

export const ErrorMsg = styled.span`
  transition: width 0.4s ease-in-out;
  color: #9c2b4e;
`;

export const ButtonSubmit = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  color: white;
  background-color: #47515d;
`;
