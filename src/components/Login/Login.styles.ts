import styled from "styled-components";
import { CustomButton } from "../Button/Button.styles";
import {
  colorLightPurple,
  colorLightGrey,
  colorDarkBlue,
  colorWhite,
} from "../../styles/colors";
export const Title = styled.h1`
  color: ${colorWhite};
`;

export const Wrapper = styled.div`
  display: flex;
  background-color: ${colorLightPurple};
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  flex-direction: column;
  border-radius: 10px;
  background-color: ${colorDarkBlue};
  height: 280px;
  min-width: 300px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  @media (min-width: 800px) {
    width: 35vw;
    height: 250px;
  }
`;

export const Label = styled.label`
  font-size: 18px;
  padding: 5px;
`;

export const Input = styled.input`
  border-radius: 10px;
  border: 0px;
  padding: 10px;
  margin: 15px;
  color: ${colorWhite};
  background-color: ${colorLightGrey};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const LoginButton = styled(CustomButton)`
  margin-top: 25px;
`;
