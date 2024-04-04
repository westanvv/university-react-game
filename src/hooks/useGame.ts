import {useState, useEffect, useMemo, useCallback} from 'react';

import {Board, BOARD_ELEMENT} from 'src/types';

export function useGame(): {
  board: Board;
  queueStep: BOARD_ELEMENT;
  updateBoard(row: number, col: number): void;
} {
  const [queueStep, setQueueStep] = useState<BOARD_ELEMENT>(BOARD_ELEMENT.x);
  const [board, setBoard] = useState<Board>([
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
  ]);

  const nextStep = useMemo(() => {
    return queueStep === BOARD_ELEMENT.o ? BOARD_ELEMENT.x : BOARD_ELEMENT.o;
  }, [queueStep]);

  useEffect(() => {
    console.log('Created');
  }, []);

  useEffect(() => {
    console.log('queue changed');
  }, [queueStep]);

  const handleUpdateBoard = useCallback(
    (row: number, col: number) => {
      const tmpBoard = [...board];
      tmpBoard[row][col] = queueStep === BOARD_ELEMENT.o ? BOARD_ELEMENT.x : BOARD_ELEMENT.o;

      setBoard(tmpBoard);
      setQueueStep(queueStep === BOARD_ELEMENT.o ? BOARD_ELEMENT.x : BOARD_ELEMENT.o);
    },
    [board, queueStep]
  );

  return {
    board,
    queueStep,
    updateBoard: handleUpdateBoard,
  };
}
