import { useRouter } from "next/router";
import React, { useState, useRef } from "react";
import { useGameContext } from "../../context/game-context";
import Button from "../Button/Button";

function Login() {
  const nickInputRef = useRef();
  const router = useRouter();

  const { setPlayerName } = useGameContext();

  const submitHandler = () => {
    const enteredNick = nickInputRef.current.value;
    setPlayerName(enteredNick);
    router.push("/game");
  };

  return (
    <div>
      <h1>Wordcloud game</h1>
      <label htmlFor="nick">Enter you nick name here</label>
      <input type="text" id="nick" ref={nickInputRef}></input>
      <Button onClick={submitHandler}>Start game</Button>
    </div>
  );
}

export default Login;
