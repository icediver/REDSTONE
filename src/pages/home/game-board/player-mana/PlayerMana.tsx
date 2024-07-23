import { Badge } from "@/components/ui/badge/Badge";
import { PlayerType } from "@/store/game/game.types";
import clsx from "clsx";

interface Props {
  currentMana: number;
  maxMana: number;
  typePlayer: PlayerType;
}
export function PlayerMana({ currentMana, maxMana, typePlayer }: Props) {
  const isPlayer = typePlayer === "player";
  return (
    <div
      className={clsx(
        "flex items-center absolute",
        isPlayer ? "right-9 bottom-7" : "left-8 top-7",
      )}
    >
      <Badge maxValue={maxMana} value={currentMana} color={"blue"} />
      <div className="flex items-center ml-2">
        {new Array(maxMana).fill(0).map((_, index) => (
          <div
            key={index}
            className={clsx(
              "w-6 h-6 bg-gradient-to-t from-sky-900 rounded-full mx-1 shadow-inner",
              index < currentMana ? "to-sky-400" : "to-sky-950",
            )}
          ></div>
        ))}
      </div>
    </div>
  );
}
