import React, { useEffect } from "react";
import Head from "next/head";
import Game from "../components/Game";
import { DATA } from "../data/data";
import { useGameContext } from "../context/game-context";
import { randomGame } from "../utils/gameUtils";

//dodać ścieki relatywne
interface iGame {
  goodWords: string[];
  allWords: string[];
  question: string;
}

function GamePage({ goodWords, allWords, question }: iGame) {
  const { setGoodWords, setAllWords } = useGameContext();

  useEffect(() => {
    setAllWords(allWords);
    setGoodWords(goodWords);
  }, [allWords, goodWords]);

  return (
    <>
      <Head>
        <title>Cloud of words - game</title>
      </Head>
      <Game question={question} />
    </>
  );
}

export async function getServerSideProps() {
  const { good_words, question, all_words } = randomGame(DATA);

  return {
    props: { goodWords: good_words, question, allWords: all_words },
  };
}

export default GamePage;
