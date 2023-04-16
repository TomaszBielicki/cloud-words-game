import styled from "styled-components";
import { colorDarkRed } from "../../styles/colors";

type tProps = { isClicked: boolean };

export const ButtonWord = styled.button<tProps>`
  background: ${(props) => (props.isClicked ? "grey" : "#ffffff")};
  color: ${(props) => props.color};
  border-radius: 10px;
  cursor: pointer;
  margin: 10px;
  padding: 6px 8px;
  border: 1px;
  margin: 5% 7%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
`;
