import React, {useState, useEffect} from 'react';

import O from 'src/assets/o.svg';
import X from 'src/assets/x.svg';

import {Board, BOARD_ELEMENT} from 'src/types';

import styles from './Dashboard.module.scss';

function Dashboard() {
  const [queueStep, setQueueStep] = useState<BOARD_ELEMENT>(BOARD_ELEMENT.x);
  const [board, setBoard] = useState<Board>([
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
  ]);

  useEffect(() => {
    console.log('Created');
  }, []);

  useEffect(() => {
    console.log('queue changed');
  }, [queueStep]);

  const handleClick = (row: number, col: number) => {
    const tmpBoard = [...board];
    tmpBoard[row][col] = queueStep === BOARD_ELEMENT.o ? BOARD_ELEMENT.x : BOARD_ELEMENT.o;

    setBoard(tmpBoard);
    setQueueStep(queueStep === BOARD_ELEMENT.o ? BOARD_ELEMENT.x : BOARD_ELEMENT.o);
  };

  return (
    <div className={styles.root}>
      <div className={styles.stepInfo}>Черга ходу - {queueStep === BOARD_ELEMENT.x ? 'O' : 'X'}</div>
      <div className={styles.content}>
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className={styles.row}>
            {row.map((col, colIndex) => (
              <div key={colIndex} className={styles.col} onClick={() => handleClick(rowIndex, colIndex)}>
                {board[rowIndex][colIndex] === BOARD_ELEMENT.o && <img src={O} />}
                {board[rowIndex][colIndex] === BOARD_ELEMENT.x && <img src={X} />}
              </div>
            ))}
          </div>
        ))}

        {/*<div className={styles.row}>*/}
        {/*  <div className={styles.col} />*/}
        {/*  <div className={styles.col}>*/}
        {/*    <img src={O} />*/}
        {/*  </div>*/}
        {/*  <div className={styles.col} />*/}
        {/*</div>*/}
        {/*<div className={styles.row}>*/}
        {/*  <div className={styles.col} />*/}
        {/*  <div className={styles.col} />*/}
        {/*  <div className={styles.col}>*/}
        {/*    <img src={X} />*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*<div className={styles.row}>*/}
        {/*  <div className={styles.col} />*/}
        {/*  <div className={styles.col} />*/}
        {/*  <div className={styles.col} />*/}
        {/*</div>*/}
      </div>
    </div>
  );
}

export default Dashboard;
