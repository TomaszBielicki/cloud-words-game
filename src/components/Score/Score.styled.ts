import styled from "styled-components";
import { colorlightPurple } from "../../styles/colors";
import Button from "../Button/Button";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  height: 100vh;
  background-color: ${colorlightPurple};
  font-size: 20px;

  @media (min-width: 1000px) {
    font-size: 30px;
  }
`;
export const Title = styled.h1`
  margin: 0px;
`;
export const ScoreTile = styled.div`
  margin: 20px;
`;

export const Text = styled.p``;
export const ScoreButton = styled(Button)``;
