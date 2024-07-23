import { ICard } from '@/types/card.types';

export type PlayerType = 'player' | 'opponent';

export interface IGameCard extends ICard {
	id: string;
	isTaken: boolean;
	isOnHand: boolean;
	isOnBoard: boolean;
	isCanAttack: boolean;
	isPlayedThisTurn: boolean;
}

export interface IHero {
	health: number;
	mana: number;
	deck: IGameCard[];
}

export interface IGameFnStore {
	startGame: () => void;
	endTurn: () => void;
	playCard: (cardId: string) => void;
	returnCard: (cardId: string) => void;
	attackCard: (attackerId: string, targetId: string) => void;
	attackHero: (attackerId: string) => void;
}

export interface IGameStore extends IGameFnStore {
	player: IHero;
	opponent: IHero;
	currentTurn: PlayerType;
	isGameOver: boolean;
	isGameStarted: boolean;
	turn: number;
}
