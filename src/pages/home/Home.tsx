import { useGameStore } from '@/store/game/game.store';
import { WelcomeScreen } from './welcome-screen/WelcomeScreen';
import { GameBoard } from './game-board/GameBoard';
import { Notification } from '@/components/ui/notification/Notification';

function Home() {
	const { isGameStarted } = useGameStore();

	return (
		<main>
			<Notification />
			{isGameStarted ? <GameBoard /> : <WelcomeScreen />}
		</main>
	);
}

export default Home;
