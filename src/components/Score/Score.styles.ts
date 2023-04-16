import styled from "styled-components";
import { colorLightPurple } from "../../styles/colors";
import Button from "../Button/Button";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  height: 100vh;
  background-color: ${colorLightPurple};
  font-size: 20px;

  @media (min-width: 1000px) {
    font-size: 30px;
  }
`;
export const Title = styled.h1`
  margin: 5% 10%;
  text-align: center;
`;
export const ScoreTile = styled.div`
  margin: 20px;
`;

export const ScoreButton = styled(Button)``;
