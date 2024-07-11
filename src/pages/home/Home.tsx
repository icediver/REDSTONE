import { useGameStore } from "@/store/game/game.store";
import { WelcomeScreen } from "./welcome-screen/WelcomeScreen";
import { GameBoard } from "./game-board/GameBoard";

function Home() {
  const { isGameStarted } = useGameStore();
  return <main>{isGameStarted ? <GameBoard /> : <WelcomeScreen />}</main>;
}

export default Home;
