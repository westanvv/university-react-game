import React, {memo, forwardRef, useImperativeHandle, useMemo} from 'react';

import {BOARD_ELEMENT} from 'src/types';
import styles from './Title.module.scss';

export interface TitleProps {
  queueStep: BOARD_ELEMENT;
}

export interface TitleRefs {
  queueStep: BOARD_ELEMENT;
  getValue(): string;
}

const Title = forwardRef<TitleRefs | null, TitleProps>(({queueStep}, ref) => {
  const text = useMemo(() => {
    return `Черга ходу - ${queueStep === BOARD_ELEMENT.x ? 'O' : 'X'}`;
  }, [queueStep]);

  useImperativeHandle(
    ref,
    () => ({
      queueStep,
      getValue() {
        return text;
      },
    }),
    [queueStep, text]
  );

  return <div className={styles.root}>{text}</div>;
});

export default memo(Title);
