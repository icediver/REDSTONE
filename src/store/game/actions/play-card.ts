import { IGameStore } from "../game.types";

export function playCardAction(
  state: IGameStore,
  cardId: number,
): Partial<IGameStore> {
  const isPlayerTurn = state.currentTurn === "player";
  const currentPlayer = isPlayerTurn ? state.player : state.opponent;

  const currentCard = currentPlayer.deck.find((card) => card.id === cardId);

  if (currentCard && currentCard && currentPlayer.mana >= currentCard.mana) {
    currentCard.isOnBoard = true;
    currentPlayer.mana -= currentCard.mana;
  }

  return isPlayerTurn ? { player: currentPlayer } : { opponent: currentPlayer };
}
