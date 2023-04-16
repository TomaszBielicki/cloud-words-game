import { useRouter } from "next/router";
import React from "react";
import Button from "../Button/Button";
import WordButton from "../WordButton/WordButton";
import { useGameContext } from "../../context/game-context";
import { Wrapper, Title, GameButton, TilesWrapper } from "./Game.styles";
function Game({ question }) {
  const {
    allWords,
    selectedWords,
    setSelectedWords,
    setIsGameOver,
    isGameOver,
  } = useGameContext();

  const route = useRouter();

  const chooseHandler = (word, isClicked) => {
    if (isClicked) return setSelectedWords([...selectedWords, word]);
    setSelectedWords(
      selectedWords.filter((selectedWord) => selectedWord !== word)
    );
  };

  const actionHandler = () => setIsGameOver(true);

  const moveToScore = () => {
    fetch("api/hello");
    route.push("/score");
  };

  return (
    <Wrapper>
      <Title>{question}</Title>
      <TilesWrapper>
        {allWords.map((word) => {
          return (
            <WordButton chooseHandler={chooseHandler} key={word} word={word} />
          );
        })}
      </TilesWrapper>

      {isGameOver && <GameButton onClick={moveToScore}>FINISH GAME</GameButton>}
      {!isGameOver && (
        <GameButton onClick={actionHandler}>CHECK ANSWERS</GameButton>
      )}
    </Wrapper>
  );
}

export default Game;
