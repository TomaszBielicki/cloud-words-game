import { useContext, useState } from "react";

import React from "react";

interface iContext {
  playerName: string;
  isGameOver: boolean;
  selectedWords: string[];
  allWords: string[];
  goodWords: string[];
  setPlayerName: React.Dispatch<React.SetStateAction<string>>;
  setIsGameOver: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedWords: React.Dispatch<React.SetStateAction<string[]>>;
  setGoodWords: React.Dispatch<React.SetStateAction<string[]>>;
  setAllWords: React.Dispatch<React.SetStateAction<string[]>>;
}

const initContext = {
  isGameOver: false,
  selectedWords: [],
  allWords: [],
  goodWords: [],
  playerName: "",
  setPlayerName: () => {},
  setIsGameOver: () => {},
  setSelectedWords: () => {},
  setGoodWords: () => {},
  setAllWords: () => {},
};
const Context = React.createContext<iContext>(initContext);

export default function GameContext({ children }: { children: JSX.Element }) {
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [goodWords, setGoodWords] = useState<string[]>([]);
  const [allWords, setAllWords] = useState<string[]>([]);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [playerName, setPlayerName] = useState<string>("");

  return (
    <Context.Provider
      value={{
        playerName,
        selectedWords,
        goodWords,
        isGameOver,
        allWords,
        setPlayerName,
        setSelectedWords,
        setGoodWords,
        setAllWords,
        setIsGameOver,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export const useGameContext = () => useContext(Context);
