import React, {useCallback, useEffect, useRef} from 'react';
import {useNavigate} from 'react-router-dom';

import {useGame} from 'src/hooks';
import BoardItem from 'src/pages/Game/BoardItem';
import Title, {TitleRefs} from 'src/pages/Game/Title';

import styles from './Game.module.scss';

function Game() {
  const {board, queueStep, updateBoard} = useGame();
  const titleRef = useRef<TitleRefs | null>(null);
  const valueRef = useRef<number>(0);

  const handleResize = useCallback((event: UIEvent) => {
    console.log(event);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  useEffect(() => {
    valueRef.current = 1;
  }, []);

  console.log(titleRef.current?.getValue(), valueRef.current);

  return (
    <div className={styles.root}>
      <Title ref={ref => (titleRef.current = ref)} queueStep={queueStep} />
      <div className={styles.content}>
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className={styles.row}>
            {row.map((col, colIndex) => (
              <BoardItem
                key={colIndex}
                value={board[rowIndex][colIndex]}
                onClick={updateBoard}
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

export default Game;
