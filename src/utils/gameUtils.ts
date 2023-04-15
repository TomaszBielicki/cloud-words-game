import { tGameData } from "../types/gameTypes";

export const randomGame = (gameData: tGameData[]): tGameData => {
  const randomIndex = Math.floor(Math.random() * gameData.length);
  return gameData[randomIndex];
};
