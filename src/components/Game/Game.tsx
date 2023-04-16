import { useRouter } from "next/router";
import React from "react";
import WordButton from "../WordButton/WordButton";
import { useGameContext } from "../../context/game-context";
import { setWordColor } from "../../utils/gameUtils";
import {
  Wrapper,
  Title,
  GameButton,
  TilesWrapper,
  Tile,
  TileWrapper,
} from "./Game.styles";
function Game({ question }) {
  const {
    allWords,
    selectedWords,
    goodWords,
    setSelectedWords,
    setIsGameOver,
    isGameOver,
  } = useGameContext();

  const route = useRouter();
  console.log("game props", selectedWords);
  const chooseHandler = (word: string, isClicked: boolean) => {
    if (isClicked) return setSelectedWords([...selectedWords, word]);
    setSelectedWords(
      selectedWords.filter((selectedWord) => selectedWord !== word)
    );
  };

  const actionHandler = () => setIsGameOver(true);

  const moveToScore = () => {
    setIsGameOver(false);
    route.push("/score");
  };

  return (
    <Wrapper>
      <Title>{question}</Title>
      <TilesWrapper>
        {allWords.map((word) => {
          const isWordSelected = selectedWords.includes(word);
          const isWordCorrect = goodWords.includes(word);

          return (
            <TileWrapper key={word}>
              {isGameOver && isWordCorrect && isWordSelected ? (
                <Tile
                  color={setWordColor(
                    isGameOver,
                    selectedWords,
                    goodWords,
                    word
                  )}
                >
                  good
                </Tile>
              ) : isGameOver && isWordSelected ? (
                <Tile
                  color={setWordColor(
                    isGameOver,
                    selectedWords,
                    goodWords,
                    word
                  )}
                >
                  bad
                </Tile>
              ) : null}
              <WordButton
                chooseHandler={chooseHandler}
                key={word}
                word={word}
              ></WordButton>
            </TileWrapper>
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
