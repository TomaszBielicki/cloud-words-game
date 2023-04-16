import React, { useState } from "react";
import { ButtonWord } from "./WordButton.styles";
import { useGameContext } from "../../context/game-context";
import { getWordColor } from "../../utils/gameUtils";
const WordButton = ({ word, chooseHandler }) => {
  const [isClicked, setIsClicked] = useState(false);

  const { goodWords, selectedWords, isGameOver } = useGameContext();

  const handleClick = () => {
    setIsClicked(!isClicked);
    chooseHandler(word, !isClicked);
  };

  return (
    <>
      <ButtonWord
        disabled={isGameOver}
        onClick={handleClick}
        isClicked={isClicked}
        color={getWordColor(isGameOver, selectedWords, goodWords, word)}
      >
        {word}
      </ButtonWord>
    </>
  );
};

export default WordButton;
