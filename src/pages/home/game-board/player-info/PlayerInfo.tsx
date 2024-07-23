import { Badge } from '@/components/ui/badge/Badge';
import { MAX_HP } from '@/constants/game/core.constants';
import { IHero, PlayerType } from '@/store/game/game.types';
import clsx from 'clsx';
import { useEnemyTarget } from '../board-card/useEnemyTarget';
import { useGameStore } from '@/store/game/game.store';
import { useSelectAttacker } from '@/store/game/select-attacker';
import { EnumTypeCard } from '@/types/card.types';
import { DamageList } from '../damage-list/DamageList';

interface Props {
	player: Omit<IHero, 'deck'>;
	typePlayer: PlayerType;
}
export function PlayerInfo({ player, typePlayer }: Props) {
	const { cardAttackerId } = useSelectAttacker();
	const { handleSelectTarget } = useEnemyTarget();
	const { currentTurn, opponent } = useGameStore();

	const opponentTaunt = opponent.deck.find(
		(card) => card.type === EnumTypeCard.taunt && card.isOnBoard
	);
	const isPlayer = typePlayer === 'player';

	return (
		<button
			className={clsx(
				'absolute z-[1] cursor-default rounded-xl border-2 border-transparent transition-colors',
				{
					'-bottom-1 left-9': isPlayer,
					'right-6 top-2': !isPlayer,
					'!cursor-pointer !border-red-400':
						!isPlayer && cardAttackerId && !opponentTaunt,
				}
			)}
			onClick={() => (isPlayer ? null : handleSelectTarget(undefined, true))}
			disabled={isPlayer || currentTurn === 'opponent'}
		>
			<img
				width={200}
				src={
					isPlayer ? 'assets/heroes/player.png' : 'assets/heroes/opponent.png'
				}
				alt={typePlayer}
			/>
			<div
				className={clsx(
					'absolute flex w-full items-center justify-center',
					isPlayer ? 'bottom-2.5' : '-bottom-1'
				)}
			>
				<Badge maxValue={MAX_HP} value={player.health} color={'red'} />
			</div>
			<DamageList id={typePlayer} isRight={isPlayer} />
		</button>
	);
}
