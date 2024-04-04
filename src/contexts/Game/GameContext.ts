import {createContext} from 'react';
import {Board, BOARD_ELEMENT} from 'src/types';

export interface GameContextType {
  board: Board;
  queueStep: BOARD_ELEMENT;
  updateBoard(row: number, col: number): void;
}

export default createContext<GameContextType>({
  board: [
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
  ],
  queueStep: BOARD_ELEMENT.x,
  updateBoard: (row, col) => {},
});
