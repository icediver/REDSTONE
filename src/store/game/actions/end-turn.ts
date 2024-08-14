import { MAX_MANA } from '@/constants/game/core.constants';
import { IGameCard, IGameStore, PlayerType } from '../game.types';
import { drawCardsAction } from './draw-cards';
import { useNotificationStore } from '@/store/notification/notification.store';

function getNewMana(currentTurn: number) {
	return Math.min(currentTurn, MAX_MANA);
}

function updateCardOnTheEndTurn(deck: IGameCard[]) {
	return deck.map((card) => ({
		...card,
		isCanAttack: card.isOnBoard,
		isPlayedThisTurn: false,
	}));
}

export const endTurnAction = (state: IGameStore): Partial<IGameStore> => {
	const newTurn: PlayerType =
		state.currentTurn === 'player' ? 'opponent' : 'player';

	const isNewTurnPlayer = newTurn === 'player';

	const newTurnNumber = isNewTurnPlayer ? state.turn + 1 : state.turn;

	let newPlayerMana = state.player.mana;
	let newOpponentMana = state.opponent.mana;

	if (isNewTurnPlayer) {
		newPlayerMana = getNewMana(newTurnNumber);
		useNotificationStore.getState().show('Your turn');
	} else {
		newOpponentMana = getNewMana(newTurnNumber);
	}

	const updatedState = {
		...state,
		currentTurn: newTurn,
		player: {
			...state.player,
			mana: newPlayerMana,
			deck: updateCardOnTheEndTurn(state.player.deck),
		},
		opponent: {
			...state.opponent,
			mana: newOpponentMana,
			deck: updateCardOnTheEndTurn(state.opponent.deck),
		},
		turn: newTurnNumber,
	};
	if (!isNewTurnPlayer) {
		updatedState.opponent = {
			...updatedState.opponent,
			deck: drawCardsAction(updatedState.opponent),
		};
	} else {
		updatedState.player = {
			...updatedState.player,
			deck: drawCardsAction(updatedState.player),
		};
	}

	return updatedState;
};
