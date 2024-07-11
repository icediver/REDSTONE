import { IGameCard, IGameStore, PlayerType } from "../game.types";

function getNewMana(newTurn: PlayerType, currentMana: number) {
  return newTurn === "player" ? Math.min(currentMana + 1, 6) : currentMana;
}

function resetAttack(deck: IGameCard[]) {
  return deck.map((card) => ({ ...card, isCanAttack: card.isOnBoard }));
}

export const endTurnAction = (get: () => IGameStore): Partial<IGameStore> => {
  const state = get();
  const newTurn: PlayerType =
    state.currentTurn === "player" ? "opponent" : "player";
  const newPlayerMana = getNewMana("player", state.player.mana);
  const newOpponentMana = getNewMana("opponent", state.player.mana);

  return {
    currentTurn: newTurn,
    player: {
      ...state.player,
      mana: newPlayerMana,
      deck: resetAttack(state.player.deck),
    },
    opponent: {
      ...state.opponent,
      mana: newOpponentMana,
      deck: resetAttack(state.opponent.deck),
    },
  };
};
