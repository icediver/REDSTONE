import { IGameCard } from "@/store/game/game.types";
import { BoardCard } from "./BoardCard";

export function GridBoardCards({
  deck,
}: {
  deck: IGameCard[];
  isPlayer?: boolean;
}) {
  return (
    <div className="h-56 py-7 px-20 flex items-center justify-center gap-1">
      {deck
        .filter((card) => card.isOnBoard)
        .map((card) => (
          <BoardCard key={card.id} card={card} />
        ))}
    </div>
  );
}
