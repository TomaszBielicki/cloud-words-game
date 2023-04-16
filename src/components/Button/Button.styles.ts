import styled from "styled-components";
import { colorLightRed, colorDarkRed, colorWhite } from "../../styles/colors";
export const CustomButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  margin: 0;
  border-radius: 15px;
  color: ${colorWhite};
  padding: 10px 40px;
  background-color: ${colorDarkRed};
  border: 1px solid ${colorDarkRed};
  box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px,
    rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;

  &:hover {
    background-color: ${colorLightRed};
    border: 1px solid ${colorLightRed};
  }
`;
