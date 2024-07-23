import { Button } from "@/components/ui/button/Button";
import { Heading } from "@/components/ui/heading/Heading";
import { Loader } from "@/components/ui/loader/Loader";
import { useGameStore } from "@/store/game/game.store";
import { useTransition } from "react";

export function WelcomeScreen() {
  const [isPending, startTransition] = useTransition();
  const { startGame } = useGameStore();

  const onClick = () => {
    startTransition(() => {
      startGame();
    });
  };
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen">
      <Heading>RED STONE</Heading>
      <Button variant="primary" onClick={onClick}>
        {isPending ? <Loader /> : "Start Game"}
      </Button>
    </div>
  );
}
