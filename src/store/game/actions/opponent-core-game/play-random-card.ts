import { random } from 'lodash';
import { IGameStore } from '../../game.types';
import { playCardAction } from '../play-card';

export function playRandomCard(state: IGameStore, mana: number) {
	const playableCards = state.opponent.deck.filter(
		(card) => !card.isOnBoard && card.isOnHand && card.mana <= mana
	);

	if (playableCards.length === 0) return state;

	const randomIndex = random(playableCards.length - 1);

	const randomCard = playableCards[randomIndex];

	const newState = playCardAction(state, randomCard.id);

	return newState;
}
