import { Button } from '@/components/ui/button/Button';
import { useGameStore } from '@/store/game/game.store';

export function EndTurnButton() {
	const { endTurn, currentTurn } = useGameStore();
	const isOpponentTurn = currentTurn === 'opponent';
	return (
		<Button
			variant={isOpponentTurn ? 'disabled' : 'primary'}
			className="absolute right-4 z-10"
			style={{ top: -29.25 }}
			onClick={isOpponentTurn ? () => null : endTurn}
			disabled={isOpponentTurn}
		>
			{isOpponentTurn ? 'Opponent turn' : 'End turn'}
		</Button>
	);
}
