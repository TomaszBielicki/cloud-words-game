import styled from "styled-components";

export const ButtonWord = styled.button`
  background: ${(props) => (props.isClicked ? "grey" : "white")};
  color: ${(props) => props.color};
`;
