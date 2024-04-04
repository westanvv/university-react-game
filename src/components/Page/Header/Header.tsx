import React, {memo} from 'react';

import styles from './Header.module.scss';

function Header() {
  return <header className={styles.root}>Гра - "Хрестики - нолики"</header>;
}

export default memo(Header);
