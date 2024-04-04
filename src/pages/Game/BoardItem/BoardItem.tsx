import React, {memo, useContext} from 'react';

import O from 'src/assets/o.svg';
import X from 'src/assets/x.svg';

import {BOARD_ELEMENT} from 'src/types';
import {GameContext} from 'src/contexts/Game';

import styles from './BoardItem.module.scss';

export interface BoardItemProps {
  colIndex: number;
  rowIndex: number;
}

function BoardItem({colIndex, rowIndex}: BoardItemProps) {
  const game = useContext(GameContext);

  const handleClick = () => {
    game.updateBoard(rowIndex, colIndex);
  };

  const value = game.board[rowIndex][colIndex];

  return (
    <div className={styles.root} onClick={handleClick}>
      {value === BOARD_ELEMENT.o && <img src={O} />}
      {value === BOARD_ELEMENT.x && <img src={X} />}
    </div>
  );
}

export default memo(BoardItem);
