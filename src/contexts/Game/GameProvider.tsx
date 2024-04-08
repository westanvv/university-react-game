import React, {ReactNode, useCallback, useState, useMemo} from 'react';

import GameContext, {GameContextType} from './GameContext';
import {Board, BOARD_ELEMENT} from 'src/types';

export interface GameProviderProps {
  children: ReactNode;
}

function GameProvider({children}: GameProviderProps) {
  const [queueStep, setQueueStep] = useState<BOARD_ELEMENT>(BOARD_ELEMENT.x);
  const [board, setBoard] = useState<Board>([
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
  ]);

  const handleUpdateBoard = useCallback(
    (row: number, col: number) => {
      const tmpBoard = [...board];
      tmpBoard[row][col] = queueStep === BOARD_ELEMENT.o ? BOARD_ELEMENT.x : BOARD_ELEMENT.o;

      setBoard(tmpBoard);
      setQueueStep(queueStep === BOARD_ELEMENT.o ? BOARD_ELEMENT.x : BOARD_ELEMENT.o);
    },
    [board, queueStep]
  );

  const values = useMemo<GameContextType>(() => {
    return {
      board,
      queueStep,
      updateBoard: handleUpdateBoard,
    };
  }, [board, queueStep, handleUpdateBoard]);

  return <GameContext.Provider value={values}>{children}</GameContext.Provider>;
}

export default GameProvider;
