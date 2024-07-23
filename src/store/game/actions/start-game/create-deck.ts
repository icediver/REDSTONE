import { CARDS } from '@/constants/game/cards.constants';
import { IGameCard, PlayerType } from '../../game.types';

export function createDeck(typePlayer: PlayerType): IGameCard[] {
	return CARDS.map((card, index) => ({
		...card,
		id: index + 1 + '_' + typePlayer,
		isTaken: false,
		isOnHand: false,
		isOnBoard: false,
		isCanAttack: false,
		isPlayedThisTurn: false,
	}));
}
