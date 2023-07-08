import React from 'react';

import styles from './App.module.scss';

import OAutoLogin from '@/components/OAutoLogin/OAutoLogin';
import useCreditProduct from '@/hooks/useCreditProduct';
import useDomainTitle from '@/hooks/useDomainTitle';
import useViewportWatcher from '@/hooks/useViewportWatcher';
import Router from '@/router/Router';

const App = () => {
  useDomainTitle();
  useCreditProduct();
  useViewportWatcher();

  return (
    <main id="main-block" className={styles.main}>
      <Router />
      <OAutoLogin />
    </main>
  );
};

export default App;
