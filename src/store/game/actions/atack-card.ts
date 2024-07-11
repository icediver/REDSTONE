import { IGameCard, IGameStore } from "../game.types";

export function getCardById(cardId: number, deck: IGameCard[]) {
  return deck.find((card) => card.id === cardId);
}

export function attackCardAction(
  state: IGameStore,
  attackerId: number,
  targetId: number,
): Partial<IGameStore> {
  const isAttackerPlayer = state.currentTurn === "player";

  const attacker = getCardById(
    attackerId,
    isAttackerPlayer ? state.player.deck : state.opponent.deck,
  );

  const target = getCardById(
    targetId,
    isAttackerPlayer ? state.opponent.deck : state.opponent.deck,
  );

  if (attacker && target && attacker.isCanAttack) {
    target.health -= attacker.attack;

    attacker.isCanAttack = false;

    if (target.health <= 0) {
      if (isAttackerPlayer) {
        state.opponent.deck = state.opponent.deck.filter(
          (card) => card.id !== target.id,
        );
      } else {
        state.player.deck = state.player.deck.filter(
          (card) => card.id !== target.id,
        );
      }
    }
  }
  return { player: state.player, opponent: state.opponent };
}
