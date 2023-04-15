//import "styles/globals.css";
import GameContext from "../context/game-context";

export default function App({ Component, pageProps }) {
  return (
    <GameContext>
      <Component {...pageProps} />
    </GameContext>
  );
}
