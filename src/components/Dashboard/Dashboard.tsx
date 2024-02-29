import React, {useState, useEffect, useMemo, useCallback, memo} from 'react';

import {Board, BOARD_ELEMENT} from 'src/types';
import BoardItem from 'src/components/BoardItem';

import styles from './Dashboard.module.scss';

function Dashboard() {
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

  const handleClick = useCallback(
    (row: number, col: number) => {
      const tmpBoard = [...board];
      tmpBoard[row][col] = queueStep === BOARD_ELEMENT.o ? BOARD_ELEMENT.x : BOARD_ELEMENT.o;

      setBoard(tmpBoard);
      setQueueStep(queueStep === BOARD_ELEMENT.o ? BOARD_ELEMENT.x : BOARD_ELEMENT.o);
    },
    [board, queueStep]
  );

  return (
    <div className={styles.root}>
      <div className={styles.stepInfo}>Черга ходу - {queueStep === BOARD_ELEMENT.x ? 'O' : 'X'}</div>
      <div className={styles.content}>
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className={styles.row}>
            {row.map((col, colIndex) => (
              <BoardItem
                key={colIndex}
                value={board[rowIndex][colIndex]}
                onClick={handleClick}
                rowIndex={rowIndex}
                colIndex={colIndex}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
