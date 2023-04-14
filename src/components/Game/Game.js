import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import WordButton from "../WordButton/WordButton";

function Game(props) {
  const [selectedWords, setSelectedWords] = useState([]);
  const [result, setResult] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const { selectedGame } = props;

  const compareWordsHandler = () => {
    const { good_words } = selectedGame;

    const firstWord = selectedWords;
    const secondWord = good_words;

    const compare = firstWord.filter((word) => secondWord.includes(word));

    return compare;
  };
  console.log("selected words", selectedWords);
  const compareWords = compareWordsHandler();
  console.log("compare words", compareWords);

  const chooseHandler = (word, isClicked) => {
    if (isClicked) {
      setSelectedWords([...selectedWords, word]);
    } else {
      setSelectedWords(
        selectedWords.filter((selectedWord) => selectedWord !== word)
      );
    }
  };

  const compareArraysHandler = (selectedWords, compareWords) => {
    return selectedWords.map((word) => {
      if (compareWords.includes(word)) {
        return (
          <WordButton key={word} word={word} textColor={"green"}>
            {word}
          </WordButton>
        );
      } else {
        return console.log("czerowny", word);
      }
    });
  };

  //   console.log(compareArraysHandler(selectedWords, compareWords));

  const actionHandler = () => {
    compareArraysHandler(selectedWords, compareWords);
    setClicked(true);
    setGameOver(true);
  };

  return (
    <>
      <div>Game</div>
      <h1>{selectedGame.question}</h1>
      <div>
        {selectedGame.all_words.map((word) => {
          return (
            <>
              <WordButton
                chooseHandler={chooseHandler}
                key={word}
                word={word}
                textColor={"black"}
              >
                {word}
              </WordButton>
            </>
          );
        })}
      </div>

      <Button onClick={actionHandler}>check answers</Button>
    </>
  );
}

export default Game;
