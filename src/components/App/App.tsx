import React, {ReactNode, FC} from 'react';

import styles from './App.module.scss';

export interface AppProps {
  children: ReactNode;
}

function App({children}: AppProps) {
  return (
    <div className={styles.root}>
      <header className={styles.header}>React гра - "Хрестики - нолики"</header>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

export default App;
