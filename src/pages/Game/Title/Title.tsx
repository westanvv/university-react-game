import React, {memo, forwardRef, useImperativeHandle, useMemo, useContext} from 'react';

import {GameContext} from 'src/contexts/Game';

import {BOARD_ELEMENT} from 'src/types';
import styles from './Title.module.scss';

export interface TitleRefs {
  queueStep: BOARD_ELEMENT;
  getValue(): string;
}

const Title = forwardRef<TitleRefs | null>((_, ref) => {
  const game = useContext(GameContext);

  const text = useMemo(() => {
    return `Черга ходу - ${game.queueStep === BOARD_ELEMENT.x ? 'O' : 'X'}`;
  }, [game.queueStep]);

  useImperativeHandle(
    ref,
    () => ({
      queueStep: game.queueStep,
      getValue() {
        return text;
      },
    }),
    [game.queueStep, text]
  );

  return <div className={styles.root}>{text}</div>;
});

export default memo(Title);
