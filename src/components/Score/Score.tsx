import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useGameContext } from "../../context/game-context";
import { Title, ScoreTile, Wrapper, ScoreButton } from "./Score.styles";

function Score() {
  const { goodWords, selectedWords, playerName, isGameOver, setSelectedWords } =
    useGameContext();
  const router = useRouter();

  const [score, setScore] = useState<number>(0);

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
    if (score < 0) setScore(0);
  }, [goodWords, selectedWords]);

  const homePageHandler = () => {
    setSelectedWords([]);
    router.push("/");
  };

  return (
    <Wrapper>
      <Title>Congratulations, {playerName}</Title>
      <p>Your score : </p>
      <ScoreTile>{score} points</ScoreTile>
      <ScoreButton onClick={homePageHandler}>BACK TO HOME</ScoreButton>
    </Wrapper>
  );
}

export default Score;
