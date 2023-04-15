import React, { useState } from "react";
import { ButtonWord } from "./WordButton.styles";
import { useGameContext } from "../../context/game-context";

const WordButton = ({ word, chooseHandler, color }) => {
  const [isClicked, setIsClicked] = useState(false);

  const { goodWords, selectedWords, isGameOver } = useGameContext();

  const handleClick = () => {
    setIsClicked(!isClicked);
    chooseHandler(word, !isClicked);
  };

  function setWordColor() {
    if (!isGameOver) return "black";
    const goodSelectedWords = selectedWords.filter((word) =>
      goodWords.includes(word)
    );

    if (goodSelectedWords.includes(word)) return "green";
    if (selectedWords.includes(word)) return "red";
  }

  return (
    <>
      {/* {color === "green" ? <p>Good</p> : <p>Bad</p>} */}
      <ButtonWord
        disabled={isGameOver}
        onClick={handleClick}
        isClicked={isClicked}
        color={setWordColor()}
      >
        {word}
      </ButtonWord>
    </>
  );
};

export default WordButton;
