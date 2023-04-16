import React from "react";
import Score from "../components/Score";
import Head from "next/head";
export default function ScorePage() {
  return (
    <>
      <Head>
        <title>Cloud of words - score</title>
      </Head>

      <Score />
    </>
  );
}
