import React from 'react';

import styles from './App.module.scss';

import OAutoLogin from '@/components/OAutoLogin/OAutoLogin';
import useDomainTitle from '@/hooks/useDomainTitle';
import Router from '@/router/Router';

const App = () => {
  useDomainTitle();

  return (
    <main id="main-block" className={styles.main}>
      <Router />
      <OAutoLogin />
    </main>
  );
};

export default App;
