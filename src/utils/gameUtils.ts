import { tGameData } from "../types/gameTypes";
import { colorGreen, colorRed } from "../styles/colors";

export const randomGame = (gameData: tGameData[]): tGameData => {
  const randomIndex = Math.floor(Math.random() * gameData.length);
  return gameData[randomIndex];
};

export const getWordColor = (
  isGameOver: boolean,
  selectedWords: string[],
  goodWords: string[],
  word: string
): string => {
  if (!isGameOver) return "black";
  const goodSelectedWords = selectedWords.filter((word) =>
    goodWords.includes(word)
  );

  if (goodSelectedWords.includes(word)) return colorGreen;
  if (selectedWords.includes(word)) return colorRed;

  return "black";
};
