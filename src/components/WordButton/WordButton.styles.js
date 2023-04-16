import styled from "styled-components";
import { colorlightPurple } from "../../styles/colors";
export const ButtonWord = styled.button`
  background: ${(props) => (props.isClicked ? "grey" : "#8d9db6")};
  color: ${(props) => props.color};
  border-radius: 10px;
  cursor: pointer;
  margin: 10px;
  border: 1px;
  margin-top: 5%;
  margin-left: 22%;
`;
