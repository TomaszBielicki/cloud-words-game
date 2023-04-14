import styled from "styled-components";

export const ButtonWord = styled.button`
  background: white;

  color: ${(props) => (props.isClicked ? "orange" : props.textColor)};
`;
