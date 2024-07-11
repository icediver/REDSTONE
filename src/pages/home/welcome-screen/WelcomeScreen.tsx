import { Button } from "@/components/ui/button/Button";
import { Heading } from "@/components/ui/heading/Heading";
import { useGameStore } from "@/store/game/game.store";

export function WelcomeScreen() {
  const { startGame } = useGameStore();
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen">
      <Heading>RED STONE</Heading>
      <Button variant="primary" onClick={startGame}>
        Start Game
      </Button>
    </div>
  );
}
