import { CARDS } from "@/constants/game/cards.constants";
import { IGameCard } from "./game.types";

export function createDeck(): IGameCard[] {
  return CARDS.map((card, index) => ({
    ...card,
    id: index + 1,
    isOnBoard: false,
    isCanAttack: false,
  }));
}
