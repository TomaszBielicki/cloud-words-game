import { useRouter } from "next/router";
import React, { useRef } from "react";
import { useGameContext } from "../../context/game-context";
import {
  Title,
  Wrapper,
  Content,
  Label,
  Input,
  LoginButton,
} from "./Login.styles";

function Login() {
  const nickInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const { setPlayerName } = useGameContext();

  const submitHandler = () => {
    const enteredNick = nickInputRef.current?.value;
    setPlayerName(enteredNick ?? "");
    router.push("/game");
  };

  return (
    <Wrapper>
      <Content>
        <Title>Wordcloud game</Title>
        <Label htmlFor="nick">Enter you nick name here</Label>
        <Input
          type="text"
          id="nick"
          ref={nickInputRef}
          minLength={3}
          maxLength={15}
          required
          placeholder="Nickname"
        ></Input>
        <LoginButton onClick={submitHandler}>Start game</LoginButton>
      </Content>
    </Wrapper>
  );
}

export default Login;
