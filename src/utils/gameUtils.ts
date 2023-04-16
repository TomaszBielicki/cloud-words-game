import { tGameData } from "../types/gameTypes";

export const randomGame = (gameData: tGameData[]): tGameData => {
  const randomIndex = Math.floor(Math.random() * gameData.length);
  return gameData[randomIndex];
};

export function setWordColor(
  isGameOver: boolean,
  selectedWords: string[],
  goodWords: string[],
  word: string
) {
  if (!isGameOver) return "black";
  const goodSelectedWords = selectedWords.filter((word) =>
    goodWords.includes(word)
  );

  if (goodSelectedWords.includes(word)) return "#83b82e";
  if (selectedWords.includes(word)) return "#ba2f2f";
}
