import React, { useState } from "react";
import Head from "next/head";
import Game from "@/components/Game/Game";
import { DATA } from "@/data/data";
function GamePage({ selectedGame }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Game selectedGame={selectedGame} />
    </>
  );
}

export async function getServerSideProps() {
  const gameData = DATA;

  const randomGame = (gameData) => {
    const randomIndex = Math.floor(Math.random() * gameData.length);
    return gameData[randomIndex];
  };

  const randomGameFromTable = randomGame(gameData);

  return { props: { selectedGame: randomGameFromTable } };
}

export default GamePage;
