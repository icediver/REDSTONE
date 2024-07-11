export interface ICard {
  name: string;
  mana: number;
  health: number;
  attack: number;
  imageUrl: string;
  type?: EnumTypeCard;
}

export enum EnumTypeCard {
  "taunt",
}
