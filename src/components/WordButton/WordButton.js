import React, { useState } from "react";
import { ButtonWord } from "./WordButton.styles";

const WordButton = ({ word, chooseHandler, textColor }) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
    chooseHandler(word, !isClicked);
  };

  return (
    <>
      {/* {isClicked && <span></span>} */}
      <ButtonWord
        textColor={textColor}
        onClick={handleClick}
        isClicked={isClicked}
      >
        {word}
      </ButtonWord>
    </>
  );
};

export default WordButton;
