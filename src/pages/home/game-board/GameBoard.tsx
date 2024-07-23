import { useGameStore } from '@/store/game/game.store';
import { PlayerInfo } from './player-info/PlayerInfo';
import { GameCard } from './game-card/GameCard';
import { GridBoardCards } from './board-card/GridBoardCards';
import { PlayerMana } from './player-mana/PlayerMana';
import { MAX_MANA } from '@/constants/game/core.constants';
import { AudioPlayer } from './audio-player/AudioPlayer';
import { EndTurnButton } from './end-turn-button/EndTurnButton';
import { SectionSide } from './section-side/SectionSide';

export function GameBoard() {
	const { player, opponent, playCard } = useGameStore();

	return (
		<div className="relative h-screen w-full">
			<SectionSide isPlayer={false}>
				<div>
					<PlayerInfo player={opponent} typePlayer="opponent" />
					<PlayerMana
						currentMana={opponent.mana}
						maxMana={MAX_MANA}
						typePlayer="opponent"
					/>
					<div className="absolute -top-11 w-full">
						<div className="flex items-center justify-center">
							{opponent.deck
								.filter((card) => card.isOnHand)
								.map((card, index, array) => (
									<GameCard
										card={card}
										isHided
										index={index}
										arrayLength={array.length}
										key={card.id}
									></GameCard>
								))}
						</div>
					</div>
				</div>
				<GridBoardCards deck={opponent.deck} isPlayerSide={false} />
			</SectionSide>

			<div
				className="absolute left-0 w-full"
				style={{ top: 'calc(50.1vh - 1px)' }}
			>
				<hr className="w-11/12 border border-yellow-500 opacity-60" />
				<EndTurnButton />
			</div>
			<SectionSide isPlayer>
				<GridBoardCards deck={player.deck} isPlayerSide />

				<PlayerInfo player={player} typePlayer="player" />

				<PlayerMana
					currentMana={player.mana}
					maxMana={MAX_MANA}
					typePlayer="player"
				/>

				<AudioPlayer />

				<div className="absolute -bottom-11 w-full">
					<div className="flex items-center justify-center">
						{player.deck
							.filter((card) => card.isOnHand)
							.map((card, index, array) => (
								<GameCard
									card={card}
									isHided={false}
									key={card.id}
									onClick={() => playCard(card.id)}
									arrayLength={array.length}
									index={index}
									isDisabled={player.mana < card.mana}
								></GameCard>
							))}
					</div>
				</div>
			</SectionSide>
		</div>
	);
}
