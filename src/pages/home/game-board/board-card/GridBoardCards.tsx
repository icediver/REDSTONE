import { IGameCard } from '@/store/game/game.types';
import { BoardCard } from './BoardCard';

export function GridBoardCards({
	deck,
	isPlayerSide,
}: {
	deck: IGameCard[];
	isPlayerSide: boolean;
}) {
	return (
		<div className="flex h-56 items-center justify-center gap-2 px-20">
			{deck
				.filter((card) => card.isOnBoard)
				.map((card) => (
					<BoardCard key={card.id} card={card} isPlayerSide={isPlayerSide} />
				))}
		</div>
	);
}
