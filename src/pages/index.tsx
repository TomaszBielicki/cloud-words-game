import Login from "../components/Login/Login";
import Head from "next/head";
import React from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cloud of words - login</title>
      </Head>
      <Login />
    </>
  );
}
