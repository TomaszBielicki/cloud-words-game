import Score from "../components/Score/Score";
import Head from "next/head";
import { useGameContext } from "../context/game-context";

export default function ScorePage() {
  return (
    <>
      <Head>
        <title>Cloud of words - score</title>
      </Head>
      <>
        <Score />
      </>
    </>
  );
}
