import { useGameStore } from "@/store/game/game.store";
import { PlayerInfo } from "./player-info/PlayerInfo";
import { GameCard } from "./game-card/GameCard";
import { GridBoardCards } from "./board-card/GridBoardCards";

export function GameBoard() {
  const { player, opponent, playCard } = useGameStore();

  return (
    <div
      className="relative h-screen w-full grid"
      style={{
        gridTemplateRows: "1fr .1fr 1fr",
      }}
    >
      <section className="pt-32">
        <div>
          <PlayerInfo player={opponent} typePlayer="opponent" />
          <div className="-top-10 absolute w-full">
            <div className="flex items-center justify-center">
              {opponent.deck
                .filter((card) => !card.isOnBoard)
                .slice(0, 6)
                .map((card, index, array) => (
                  <GameCard
                    card={card}
                    onClick={() => playCard(card.id)}
                    isHided
                    index={index}
                    arrayLength={array.length}
                    key={card.id}
                  ></GameCard>
                ))}
            </div>
          </div>
        </div>
        <GridBoardCards deck={opponent.deck} />
      </section>
      <hr className="border-[#8ed2c6] opacity-50" />
      <section className="pb-32">
        <GridBoardCards deck={player.deck} />
        <PlayerInfo player={player} typePlayer="player" />

        <div className="-bottom-11 absolute w-full">
          <div className="flex items-center justify-center">
            {player.deck
              .filter((card) => !card.isOnBoard)
              .slice(0, 6)
              .map((card, index, array) => (
                <GameCard
                  card={card}
                  isHided={false}
                  key={card.id}
                  onClick={() => playCard(card.id)}
                  arrayLength={array.length}
                  index={index}
                ></GameCard>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
