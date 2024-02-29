import React, {memo} from 'react';

import O from 'src/assets/o.svg';
import X from 'src/assets/x.svg';

import {BOARD_ELEMENT} from 'src/types';

import styles from './BoardItem.module.scss';

export interface BoardItemProps {
  colIndex: number;
  onClick(row: number, col: number): void;
  rowIndex: number;
  value?: BOARD_ELEMENT;
}

function BoardItem({onClick, value, colIndex, rowIndex}: BoardItemProps) {
  const handleClick = () => {
    onClick(rowIndex, colIndex);
  };

  return (
    <div className={styles.root} onClick={handleClick}>
      {value === BOARD_ELEMENT.o && <img src={O} />}
      {value === BOARD_ELEMENT.x && <img src={X} />}
    </div>
  );
}

export default memo(BoardItem);
