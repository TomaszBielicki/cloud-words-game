import styled from "styled-components";
import { CustomButton } from "../Button/Button.styles";
import {
  colorlightPurple,
  colorLightGrey,
  colorDarkBlue,
} from "../../styles/colors";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colorlightPurple};
  height: 100vh;
`;

export const Title = styled.h1`
  color: white;
  font-size: 40px;
`;

export const TilesWrapper = styled.div`
  width: 60vw;
  height: 40vh;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  border-radius: 10px;
  background-color: ${colorDarkBlue};
  margin: 15px;
  padding: 15px;
`;
export const GameButton = styled(CustomButton)`
  border-radius: 15px;
  color: white;
  padding: 10px 40px;
`;
