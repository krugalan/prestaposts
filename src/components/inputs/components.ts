import styled from "styled-components";
import { device } from "../../constants";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media ${device.laptop} {
  }

  @media ${device.desktop} {
  }
`;

export const InputEditTextField = styled.input`
  background-color: #f2f2f2;
  border-style: none;
  border-bottom-style: solid;
  width: 70%;
  margin: 10px;
  padding: 10px;
  
  @media ${device.laptop} {
  }

  @media ${device.desktop} {
  }
`;

export const InputTextField = styled.p`
  @media ${device.laptop} {
  }

  @media ${device.desktop} {
  }
`;

export const ImgIconAction = styled.img`
  margin: 5px;
`;
