import { useDamageStore } from '../damage.store';
import { IGameCard, IGameStore } from '../game.types';

export function getCardById(cardId: string, deck: IGameCard[]) {
	return deck.find((card) => card.id === cardId);
}

export function attackCardAction(
	state: IGameStore,
	attackerId: string,
	targetId: string
): Partial<IGameStore> {
	const isAttackerPlayer = state.currentTurn === 'player';
	const attacker = getCardById(
		attackerId,
		isAttackerPlayer ? state.player.deck : state.opponent.deck
	);

	const target = getCardById(
		targetId,
		isAttackerPlayer ? state.opponent.deck : state.player.deck
	);

	if (attacker && target && attacker.isCanAttack) {
		target.health -= attacker.attack;
		attacker.health -= target.attack;

		attacker.isCanAttack = false;

		useDamageStore.getState().addDamage(targetId, attacker.attack);
		useDamageStore.getState().addDamage(attackerId, target.attack);

		if (target.health <= 0) {
			state.opponent.deck = state.opponent.deck.filter(
				(card) => card.id !== targetId
			);
		} else {
			state.player.deck = state.player.deck.filter(
				(card) => card.id !== targetId
			);
		}
		if (attacker.health <= 0) {
			if (isAttackerPlayer) {
				state.player.deck = state.player.deck.filter(
					(card) => card.id !== attackerId
				);
			} else {
				state.opponent.deck = state.opponent.deck.filter(
					(card) => card.id !== attackerId
				);
			}
		}
	}

	return { player: state.player, opponent: state.opponent };
}
