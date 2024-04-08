import React, {useCallback, useContext, useEffect, useRef} from 'react';

import {GameContext} from 'src/contexts';
import BoardItem from 'src/pages/Game/BoardItem';
import Title, {TitleRefs} from 'src/pages/Game/Title';

import styles from './Game.module.scss';

function Game() {
  const game = useContext(GameContext);

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
      <Title ref={ref => (titleRef.current = ref)} />
      <div className={styles.content}>
        {game.board.map((row, rowIndex) => (
          <div key={rowIndex} className={styles.row}>
            {row.map((col, colIndex) => (
              <BoardItem key={colIndex} rowIndex={rowIndex} colIndex={colIndex} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Game;
