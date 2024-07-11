import { create } from "zustand";
import { IGameStore, IHero } from "./game.types";
import { createDeck } from "./create-deck";
import { endTurnAction } from "./actions/end-turn";
import { playCardAction } from "./actions/play-card";
import { attackCardAction } from "./actions/atack-card";
import { attackHeroAction } from "./actions/attack-hero";

const initialPlayerData: IHero = {
  deck: createDeck(),
  health: 25,
  mana: 1,
};

const initialGameData: Pick<
  IGameStore,
  "player" | "opponent" | "currentTurn" | "isGameOver" | "isGameStarted"
> = {
  player: initialPlayerData,
  opponent: initialPlayerData,
  currentTurn: "player",
  isGameOver: false,
  isGameStarted: true,
};

const useGameStore = create<IGameStore>((set, get) => ({
  ...initialGameData,
  isGameStarted: false,
  startGame: () => set(() => initialGameData),
  endTurn: () => set(endTurnAction(get)),
  playCard: (cardId: number) => {
    set((state) => playCardAction(state, cardId));
  },
  attackCard: (attackerId: number, targetId: number) => {
    set((state) => attackCardAction(state, attackerId, targetId));
  },
  attackHero: (attackerId: number) => {
    set((state) => attackHeroAction(state, attackerId));
  },
}));

export { useGameStore };
