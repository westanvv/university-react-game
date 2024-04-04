import React, {ReactNode} from 'react';

import Header from 'src/components/Page/Header';
import styles from './Page.module.scss';

export interface PageProps {
  children: ReactNode;
}

function Page({children}: PageProps) {
  return (
    <div className={styles.root}>
      <Header />
      <div className={styles.content}>{children}</div>
    </div>
  );
}

export default Page;
