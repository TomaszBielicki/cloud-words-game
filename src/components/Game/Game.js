import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import WordButton from "../WordButton/WordButton";
import { useGameContext } from "../../context/game-context";

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
    <>
      <div>Game</div>
      <h1>{question}</h1>
      <div>
        {allWords.map((word) => {
          return (
            <>
              <WordButton
                chooseHandler={chooseHandler}
                key={word}
                word={word}
              />
            </>
          );
        })}
      </div>
      {isGameOver && <Button onClick={moveToScore}>finish game</Button>}
      {!isGameOver && <Button onClick={actionHandler}>check answers</Button>}
    </>
  );
}

export default Game;
