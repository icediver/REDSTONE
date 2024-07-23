import { IGameStore } from '../game.types';

export function playCardAction(state: IGameStore, cardId: string) {
	const isPlayerTurn = state.currentTurn === 'player';
	const currentPlayer = isPlayerTurn ? state.player : state.opponent;

	const currentCardIndex = currentPlayer.deck.findIndex(
		(card) => card.id === cardId
	);

	const currentCard = currentPlayer.deck[currentCardIndex];

	if (currentCard && currentCard && currentPlayer.mana >= currentCard?.mana) {
		currentCard.isOnBoard = true;
		currentCard.isPlayedThisTurn = true;
		currentCard.isOnHand = false;

		currentPlayer.mana -= currentCard.mana;

		currentPlayer.deck.splice(currentCardIndex, 1);
		currentPlayer.deck.push(currentCard);
	}

	return {
		player: isPlayerTurn ? currentPlayer : state.player,
		opponent: isPlayerTurn ? state.opponent : currentPlayer,
	};
}
