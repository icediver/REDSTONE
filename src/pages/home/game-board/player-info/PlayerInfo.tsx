import { IHero, PlayerType } from "@/store/game/game.types";
import clsx from "clsx";

interface Props {
  player: Omit<IHero, "deck">;
  typePlayer: PlayerType;
}
export function PlayerInfo({ player, typePlayer }: Props) {
  const isPlayer = typePlayer === "player";
  return (
    <div
      className={clsx(
        "absolute left-3 ",
        typePlayer === "player" ? "bottom-5" : "top-5",
      )}
    >
      <h1 className="capitalize">{isPlayer ? "player" : "opponent"}</h1>
      <p>HP: {player.health}</p>
      <p>Mana: {player.mana}</p>
    </div>
  );
}
