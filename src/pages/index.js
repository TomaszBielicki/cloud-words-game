import Login from "../components/Login/Login";
import Head from "next/head";
import React, { useState, useRef } from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <>
        <Login />
      </>
    </>
  );
}
