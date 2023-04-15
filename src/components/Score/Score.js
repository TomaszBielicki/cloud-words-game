import React, { useState, useEffect } from "react";
import { useGameContext } from "../../context/game-context";

function Score() {
  const { goodWords, selectedWords, playerName } = useGameContext();

  const [score, setScore] = useState(0);

  useEffect(() => {
    const correctSelected = selectedWords.filter((word) =>
      goodWords.includes(word)
    );
    const incorrectSelected = selectedWords.filter(
      (word) => !goodWords.includes(word)
    );
    const notSelected = goodWords.filter(
      (word) => !selectedWords.includes(word)
    );

    const score =
      correctSelected.length * 2 -
      (incorrectSelected.length + notSelected.length);
    setScore(score);
  }, []);

  return (
    <div>
      {score} : {playerName}
    </div>
  );
}

export default Score;
