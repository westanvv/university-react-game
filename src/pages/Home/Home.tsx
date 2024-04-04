import React, {memo, useCallback} from 'react';
import {useNavigate} from 'react-router-dom';

import routes from 'src/routes';
import styles from './Home.module.scss';

function Home() {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate(routes.game);
  }, [navigate]);

  return (
    <div className={styles.root}>
      <button onClick={handleClick}>Почати гру</button>
    </div>
  );
}

export default memo(Home);
