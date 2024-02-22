export enum BOARD_ELEMENT {
  'x' = 'x',
  'o' = 'o',
}

export type Board = (BOARD_ELEMENT | undefined)[][];
