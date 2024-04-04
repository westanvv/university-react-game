import React, {memo} from 'react';

import styles from './NotFound.module.scss';

function NotFound() {
  return <div className={styles.root}>Не знайдено</div>;
}

export default memo(NotFound);
