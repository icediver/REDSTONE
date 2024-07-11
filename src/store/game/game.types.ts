import { ICard } from "@/types/card.types";

export type PlayerType = "player" | "opponent";

export interface IGameCard extends ICard {
  id: number;
  isOnBoard: boolean;
  isCanAttack: boolean;
}

export interface IHero {
  deck: IGameCard[];
  health: number;
  mana: number;
}

export interface IGameStore {
  isGameStarted: boolean;
  player: IHero;
  opponent: IHero;
  currentTurn: PlayerType;
  isGameOver: boolean;
  startGame: () => void;
  endTurn: () => void;
  playCard: (cardId: number) => void;
  attackCard: (attackerId: number, targetId: number) => void;
  attackHero: (attackerId: number) => void;
}
