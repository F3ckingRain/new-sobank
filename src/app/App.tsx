import React from 'react';

import styles from './App.module.scss';

import OAutoLogin from '@/components/OAutoLogin/OAutoLogin';
import { CURRENT_THEME } from '@/config/themeConfig';
import useCreditProduct from '@/hooks/useCreditProduct';
import useDomainTitle from '@/hooks/useDomainTitle';
import useViewportWatcher from '@/hooks/useViewportWatcher';
import Router from '@/router/Router';

const App = () => {
  useDomainTitle();
  useCreditProduct();
  useViewportWatcher();

  return (
    <main id="main-block" className={styles[`main__${CURRENT_THEME}`]}>
      <Router />
      <OAutoLogin />
    </main>
  );
};

export default App;
