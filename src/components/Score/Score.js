import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useGameContext } from "../../context/game-context";
import { Title, Text, ScoreTile, Wrapper, ScoreButton } from "./Score.styled";

function Score() {
  const { goodWords, selectedWords, playerName, setIsGameOver } =
    useGameContext();
  const router = useRouter();
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
    if (score < 0) {
      setScore(0);
    }
  }, []);

  const homePageHandler = () => {
    setIsGameOver(false);
    router.push("/");
  };

  return (
    <Wrapper>
      <Title>Congratulations, {playerName}</Title>
      <Text>Your score : </Text>
      <ScoreTile>{score} points</ScoreTile>
      <ScoreButton onClick={homePageHandler}>
        Wróc do strony głownej
      </ScoreButton>
    </Wrapper>
  );
}

export default Score;
